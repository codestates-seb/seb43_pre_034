package com.codestates.stackoverflow.questionVote.controller;

import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.repository.QuestionRepository;
import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto;
import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import com.codestates.stackoverflow.questionVote.mapper.QuestionVoteMapper;
import com.codestates.stackoverflow.questionVote.repository.QuestionVoteRepository;
import com.codestates.stackoverflow.questionVote.service.QuestionVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Optional;

@RestController
@RequestMapping("/question-votes")
@Validated
@RequiredArgsConstructor
public class QuestionVoteController {
    private final QuestionVoteService questionVoteService;
    private final QuestionVoteMapper mapper;
    private final QuestionVoteRepository questionVoteRepository;
    private final QuestionRepository questionRepository;

    @PostMapping()
    public ResponseEntity postQuestionVote(@Valid @RequestBody QuestionVoteDto.QuestionVotePostDto requestBody) {

        QuestionVote questionVote = questionVoteService.createQuestionVote(mapper.questionVotePostDto(requestBody), requestBody.getQuestionId());

        Question question = questionRepository.findById(requestBody.getQuestionId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        QuestionVoteDto.QuestionVoteResponseDto response = mapper.questionVoteResponseDto(questionVote);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{user-id}/{question-vote-id}")
    public ResponseEntity patchQuestionVote(@PathVariable("question-vote-id") @Positive long questionVoteId,
                                            @PathVariable("user-id") @Positive long userId,
                                            @Valid @RequestBody QuestionVoteDto.QuestionVotePatchDto requestBody) {

        if (questionVoteId != requestBody.getQuestionVoteId()) {
            throw new BusinessLogicException(ExceptionCode.INVALID_PATH);
        }

        questionVoteService.updateQuestionVote(questionVoteId, userId, requestBody.getVoteType());

        Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findById(questionVoteId);

        if (optionalQuestionVote.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        QuestionVote findQuestionVote = optionalQuestionVote.get();
        QuestionVoteDto.QuestionVoteResponseDto response = mapper.questionVoteResponseDto(findQuestionVote);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}/{question-vote-id}")
    public ResponseEntity<Void> deleteQuestionVote(@PathVariable("question-vote-id") long questionVoteId,
                                                   @PathVariable("user-id") @Positive long userId) {
        questionVoteService.deleteQuestionVote(questionVoteId, userId);
        return ResponseEntity.noContent().build();
    }

    public QuestionVote findVerifiedQuestionVote(long questionVoteId) {
        Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findById(questionVoteId);
        return optionalQuestionVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_VOTE_NOT_FOUND));
    }
}
