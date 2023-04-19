package com.codestates.stackoverflow.answer.controller;

import com.codestates.stackoverflow.answer.mapper.AnswerMapper;
import com.codestates.stackoverflow.answer.service.AnswerService;
import com.codestates.stackoverflow.answer.dto.AnswerDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import org.springframework.data.domain.Page;

import java.util.List;


@RestController
@Validated
@RequestMapping("/answers")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.PostDto requestBody){

        Answer answer = mapper.postToAnswer(requestBody);
        Long userId = requestBody.getUserId();
        Long questionId = requestBody.getQuestionId();

        Answer createdAnswer = answerService.createAnswer(answer, userId, questionId);

        AnswerDto.ResponseDto response = mapper.answerToResponse(createdAnswer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{answer-id")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive Long answerId) {
        Answer findAnswer = answerService.findAnswer(answerId);
        AnswerDto.ResponseDto response = mapper.answerToResponse(findAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestionAnswers(@PathVariable("question-id") @Positive Long questionId,
                                             @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                             @Positive @RequestParam(value = "size", defaultValue = "5") int size) {

        Page<Answer> answerPage = answerService.findAnswers(questionId, page - 1, size);
        List<Answer> answerList = answerPage.getContent();
        List<AnswerDto.ResponseDto> responseList = mapper.answersToResponses(answerList);

        return new ResponseEntity<>(responseList, HttpStatus.OK);

    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive Long answerId,
                                      @Valid @RequestBody AnswerDto.PatchDto requestBody) {
        requestBody.setAnswerId(answerId);
        Answer answer = mapper.patchToAnswer(requestBody);
        Answer updatedAnswer = answerService.updateAnswer(answer);
        AnswerDto.ResponseDto response = mapper.answerToResponse(updatedAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{user-id}/{answer-id}")  //check를 바꾸기 위한 메서드
    public ResponseEntity patchAnswerCheck(@PathVariable("user-id") @Positive Long userId,
                                           @PathVariable("answer-id") Long answerId) {

        Answer chekedAnswer = answerService.updateCheck(userId, answerId);
        AnswerDto.ResponseDto response = mapper.answerToResponse(chekedAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive Long answerId){
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
