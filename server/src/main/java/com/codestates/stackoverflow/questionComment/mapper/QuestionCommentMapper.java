package com.codestates.stackoverflow.questionComment.mapper;

import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
@Mapper(componentModel = "spring")
public interface QuestionCommentMapper {
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    QuestionComment commentPostDtoToQuestionComment(QuestionCommentDto.QuestionCommentPostDto commentPostDto);
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    QuestionComment commentPatchDtoToQuestionComment(QuestionCommentDto.QuestionCommentPatchDto commentPatchDto);
    @Mapping(source = "user.userId", target = "userId" )
    @Mapping(source = "question.questionId", target = "questionId")
    QuestionCommentDto.QuestionCommentResponseDto commentToCommentResponseDto(QuestionComment questionComment);
    @Mapping(source = "user.userId", target = "userId" )
    @Mapping(source = "question.questionId", target = "questionId")
    List<QuestionCommentDto.QuestionCommentResponseDto> questionCommentsToResponseDto(List<QuestionComment>questionComments);
}
