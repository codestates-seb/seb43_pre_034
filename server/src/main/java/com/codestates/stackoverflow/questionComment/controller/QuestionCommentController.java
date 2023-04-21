package com.codestates.stackoverflow.questionComment.controller;

import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import com.codestates.stackoverflow.questionComment.mapper.QuestionCommentMapper;
import com.codestates.stackoverflow.questionComment.service.QuestionCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions/{question-id}/comments")
@Validated
@RequiredArgsConstructor
public class QuestionCommentController {
    private final QuestionCommentService questionCommentService;
    private final QuestionCommentMapper mapper;
    @PostMapping
    public ResponseEntity postComment(@PathVariable("question-id") @Positive long questionId,
                                      @RequestBody QuestionCommentDto.QuestionCommentPostDto questionCommentPostDto) {
        QuestionComment questionComment = mapper.commentPostDtoToQuestionComment(questionCommentPostDto);
        List<QuestionComment> questionCommentList = questionCommentService.createQuestionComment(questionComment, questionId);
        return new ResponseEntity(mapper.questionCommentsToResponseDto(questionCommentList), HttpStatus.CREATED);
    }

    @PatchMapping("/{question-comment-id}")
    public ResponseEntity patchComment(@PathVariable("question-id") @Positive long questionId,
                                       @PathVariable("question-comment-id") @Positive long commentId,
                                       @RequestBody QuestionCommentDto.QuestionCommentPatchDto questionPatchDto) {
        QuestionComment questionComment = mapper.commentPatchDtoToQuestionComment(questionPatchDto);
        List<QuestionComment> questionCommentList = questionCommentService.editQuestionComment(questionComment, questionId, commentId);
        return new ResponseEntity<>(mapper.questionCommentsToResponseDto(questionCommentList), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getComments(@PathVariable("question-id") long questionId) {
        List<QuestionComment> questionCommentList = questionCommentService.getQuestionComments(questionId);
        return new ResponseEntity(mapper.questionCommentsToResponseDto(questionCommentList), HttpStatus.OK);
    }

    @DeleteMapping("/{question-comment-id}")
    public ResponseEntity deleteComment(@PathVariable("question-id") long questionId,
                                        @PathVariable("question-comment-id") long commentId){
        List<QuestionComment> questionCommentList = questionCommentService.deleteQuestionComment(questionId, commentId);
        return new ResponseEntity(mapper.questionCommentsToResponseDto(questionCommentList), HttpStatus.NO_CONTENT);
    }
}
