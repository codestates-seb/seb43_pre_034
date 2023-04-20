package com.codestates.stackoverflow.answerVote.controller;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto;
import com.codestates.stackoverflow.answerVote.mapper.AnswerVoteMapper;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import com.codestates.stackoverflow.answerVote.service.AnswerVoteService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/answerVotes")
@Validated
public class AnswerVoteController {

    private final AnswerVoteService answerVoteService;

    private final AnswerVoteMapper mapper;

    private final AnswerVoteRepository answerVoteRepository;

    public AnswerVoteController(AnswerVoteService answerVoteService, AnswerVoteMapper mapper, AnswerVoteRepository answerVoteRepository) {
        this.answerVoteService = answerVoteService;
        this.mapper = mapper;
        this.answerVoteRepository = answerVoteRepository;
    }


    @PostMapping()
    public ResponseEntity postAnswerVote(@Valid  @RequestBody AnswerVoteDto.PostDto requestBody) {

        AnswerVote answerVote = answerVoteService.createAnswerVote(mapper.postToVote(requestBody));

        AnswerVoteDto.ResponseDto response = mapper.voteToResponse(answerVote);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("answerVotes/{answerVote-id}")
    public ResponseEntity updateAnswerVote(@PathVariable("answerVote-id") @Positive long answerVoteId,
                                           @Valid @RequestBody AnswerVoteDto.PatchDto requestBody ){

        AnswerVote findAnswerVote = answerVoteRepository.findById(answerVoteId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid AnswerVote ID"));

        requestBody.setAnswerVoteId(answerVoteId);

        AnswerVote answerVote = mapper.patchToVote(requestBody);

        answerVoteService.updateAnswerVote(findAnswerVote,requestBody.getVoteType());

        AnswerVoteDto.ResponseDto response = mapper.voteToResponse(answerVote);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("answerVotes/{answerVote-id}")
    public ResponseEntity<Void> deleteAnswerVote(@PathVariable long answerVoteId) {
        answerVoteService.deleteAnswerVote(answerVoteId);
        return ResponseEntity.noContent().build();
    }
}
