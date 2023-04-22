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

        AnswerVote answerVote = answerVoteService.createAnswerVote(mapper.postToVote(requestBody),requestBody.getAnswerId());

        Answer answer = answerRepository.findById(requestBody.getAnswerId())
                .orElseThrow(() ->  new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        AnswerVoteDto.ResponseDto response = mapper.voteToResponse(answerVote);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-vote-id}")
    public ResponseEntity patchAnswerVote(@PathVariable("answerVote-id") @Positive long answerVoteId,
                                           @Valid @RequestBody AnswerVoteDto.PatchDto requestBody ) {

        if (answerVoteId != requestBody.getAnswerVoteId()) {
            throw new BusinessLogicException(ExceptionCode.INVALID_PATH);
        } else {
            AnswerVote findAnswerVote = answerVoteService.updateAnswerVote(answerVoteId, requestBody.getVoteType());

            AnswerVoteDto.ResponseDto response = mapper.voteToResponse(findAnswerVote);

            if (response.getUserId() != requestBody.getUserId()) {
                throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
            }

            if (answerVoteRepository.findById(response.getAnswerVoteId()).isEmpty()) {    //같은 voteType을 누르면 삭제되기 때문에 만약 Id가 저장소에 없으면 응답을 delete와 같이 나타냄
                return ResponseEntity.noContent().build();
            } else {
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        }
    }

    @DeleteMapping("/{answer-vote-id}")
    public ResponseEntity<Void> deleteAnswerVote(@PathVariable long answerVoteId) {
        answerVoteService.deleteAnswerVote(answerVoteId);
        return ResponseEntity.noContent().build();
    }
}
