package com.codestates.stackoverflow.answercomment.controller;

import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import com.codestates.stackoverflow.answercomment.mapper.AnswerCommentMapper;
import com.codestates.stackoverflow.answercomment.service.AnswerCommentService;
import com.codestates.stackoverflow.dto.MultiResponseDto;
import com.codestates.stackoverflow.dto.SingleResponseDto;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answer-comments")
@Validated
@RequiredArgsConstructor
public class AnswerCommentController {
    private final AnswerCommentService answerCommentService;
    private final AnswerCommentMapper mapper;
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody AnswerCommentDto.PostDto requestBody) {
        AnswerComment answerComment = mapper.postToComment(requestBody);

        AnswerComment createdComment = answerCommentService.createAnswerComment(answerComment);
        AnswerCommentDto.ResponseDto response = mapper.commentToResponse(createdComment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-comment-id}")
    public ResponseEntity patchComment(@PathVariable("answer-comment-id") @Positive long commentId,
                                       @Valid @RequestBody AnswerCommentDto.PatchDto requestBody) {
        if(commentId!= requestBody.getAnswerCommentId()){
            throw new BusinessLogicException(ExceptionCode.INVALID_PATH);
        }

        AnswerComment answerComment = mapper.patchToComment(requestBody);

        AnswerComment findAnswerComment = answerCommentService.updateAnswerComment(answerComment);

        AnswerCommentDto.ResponseDto response = mapper.commentToResponse(findAnswerComment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getComments(@PathVariable("answer-id") long answerId,
                                      @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                      @Positive @RequestParam(value = "size", defaultValue = "5") int size) {
        Page<AnswerComment> answerCommentPage = answerCommentService.findAnswerComments(answerId,page-1,size);
        List<AnswerComment> answerCommentList = answerCommentPage.getContent();
        List<AnswerCommentDto.ResponseDto> responseList = mapper.commentsToResponses(answerCommentList);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responseList,answerCommentPage), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}/{answer-comment-id}")
    public ResponseEntity deleteComment(@PathVariable("user-id") long userId,
                                        @PathVariable("answer-comment-id") long commentId){

        answerCommentService.deleteAnswerComment(commentId, userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
