package com.codestates.stackoverflow.answer.controller;

import com.codestates.stackoverflow.answer.mapper.AnswerMapper;
import com.codestates.stackoverflow.answer.service.AnswerService;
import com.codestates.stackoverflow.answer.dto.AnswerDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.dto.MultiResponseDto;
import com.codestates.stackoverflow.dto.SingleResponseDto;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;


    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.PostDto requestBody){

        Answer answer = mapper.postToAnswer(requestBody);
        Answer createdAnswer = answerService.createAnswer(answer);
        AnswerDto.ResponseDto response = mapper.answerToResponse(createdAnswer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer findAnswer = answerService.findAnswer(answerId);
        AnswerDto.ResponseDto response = mapper.answerToResponse(findAnswer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestionAnswers(@PathVariable("question-id") @Positive Long questionId,
                                             @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                             @Positive @RequestParam(value = "size", defaultValue = "5") int size) {

        Page<Answer> answerPage = answerService.findAnswers(questionId, page - 1, size);
        List<Answer> answerList = answerPage.getContent();
        List<AnswerDto.ResponseDto> responseList = mapper.answersToResponses(answerList);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responseList,answerPage), HttpStatus.OK);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.PatchDto requestBody) {
        if (answerId != requestBody.getAnswerId()) {
            throw new BusinessLogicException(ExceptionCode.INVALID_PATH);
        }
        Answer answer = mapper.patchToAnswer(requestBody);
        Answer updatedAnswer = answerService.updateAnswer(answer);
        AnswerDto.ResponseDto response = mapper.answerToResponse(updatedAnswer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PatchMapping("/{user-id}/{answer-id}/check")  //check를 바꾸기 위한 메서드
    public ResponseEntity patchAnswerCheck(@PathVariable("user-id") @Positive long userId,
                                           @PathVariable("answer-id") long answerId) {

        Answer chekedAnswer = answerService.updateCheck(userId, answerId);
        AnswerDto.ResponseDto response = mapper.answerToResponse(chekedAnswer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response.isChecked()), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("user-id") @Positive long userId,
                                       @PathVariable("answer-id") @Positive long answerId){

        answerService.deleteAnswer(answerId,userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
