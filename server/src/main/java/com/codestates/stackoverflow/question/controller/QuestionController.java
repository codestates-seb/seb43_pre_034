package com.codestates.stackoverflow.question.controller;

import com.codestates.stackoverflow.dto.MultiResponseDto;
import com.codestates.stackoverflow.dto.SingleResponseDto;
import com.codestates.stackoverflow.question.dto.QuestionDto;
import com.codestates.stackoverflow.question.dto.QuestionResponseDto;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.mapper.QuestionMapper;
import com.codestates.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        Question createQuestion = questionService.createQuestion(question);
        QuestionResponseDto responseDto = mapper.questionToQuestionResponseDto(createQuestion);
        return new ResponseEntity(responseDto, HttpStatus.CREATED);
    }
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.QuestionPatchDto questionPatchDto) {
        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        question.setQuestionId(questionId);
        Question editedQuestion = questionService.updateQuestion(question);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(editedQuestion)), HttpStatus.OK
        );
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") @Positive long questionId) {
        Question question = questionService.getQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity getQuestions(@PageableDefault(page = 1, size = 15)Pageable pageable) {
        Page<Question> questionPage = questionService.getQuestions(pageable);
        List<Question> questionList = questionPage.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToResponseDto(questionList), questionPage), HttpStatus.OK
        );
    }

    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
