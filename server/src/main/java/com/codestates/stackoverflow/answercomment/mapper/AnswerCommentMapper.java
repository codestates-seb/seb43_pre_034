package com.codestates.stackoverflow.answercomment.mapper;

import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper {

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    AnswerComment postToComment(AnswerCommentDto.PostDto postDto);

    AnswerComment patchToComment(AnswerCommentDto.PatchDto patchDto);

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "answer.answerId", target = "answerId")
    AnswerCommentDto.ResponseDto commentToResponse(AnswerComment answerComment);

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "answer.answerId", target = "answerId")
    List<AnswerCommentDto.ResponseDto> commentsToResponses(List<AnswerComment> answerComments);
}
