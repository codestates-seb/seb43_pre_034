package com.codestates.stackoverflow.answerVote.controller;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.repository.AnswerRepository;
import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto;
import com.codestates.stackoverflow.answerVote.mapper.AnswerVoteMapper;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import com.codestates.stackoverflow.answerVote.service.AnswerVoteService;

import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Optional;


@RestController
@RequestMapping("/answer-votes")
@Validated
@RequiredArgsConstructor
public class AnswerVoteController {

    private final AnswerVoteService answerVoteService;

    private final AnswerVoteMapper mapper;

    private final AnswerVoteRepository answerVoteRepository;

    private final AnswerRepository answerRepository;


    @PostMapping()
    public ResponseEntity postAnswerVote(@Valid  @RequestBody AnswerVoteDto.PostDto requestBody) {

        AnswerVote answerVote = answerVoteService.createAnswerVote(mapper.postToVote(requestBody));

        Answer answer = answerRepository.findById(requestBody.getAnswerId())
                .orElseThrow(() ->  new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        AnswerVoteDto.ResponseDto response = mapper.voteToResponse(answerVote);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-vote-id}")
    public ResponseEntity patchAnswerVote(@PathVariable("answer-vote-id") @Positive long answerVoteId,
                                          @Valid @RequestBody AnswerVoteDto.PatchDto requestBody ) {

        if (answerVoteId != requestBody.getAnswerVoteId()) {  //경로가 잘못되었을 시 에러처리
             throw new BusinessLogicException(ExceptionCode.INVALID_PATH);
        }

        AnswerVote answerVote = mapper.patchToVote(requestBody);

        answerVoteService.updateAnswerVote(answerVote);  //같은 타입의 vote를 누를 시 answerVoteId가 삭제됨

        Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findById(answerVoteId); //따라서 voteId가 저장소에 있는지 확인

        if (optionalAnswerVote.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        AnswerVote findAnswerVote = optionalAnswerVote.get();        //삭제되지 않았으면 answerVote를 응답으로 처리
        AnswerVoteDto.ResponseDto response = mapper.voteToResponse(findAnswerVote);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
