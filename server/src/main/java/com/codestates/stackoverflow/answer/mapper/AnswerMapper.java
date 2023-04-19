package com.codestates.stackoverflow.answer.mapper;

import com.codestates.stackoverflow.answer.dto.AnswerDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    Answer postToAnswer(AnswerDto.Post postDto);

    Answer patchToAnswer(AnswerDto.Patch patchDto);

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    AnswerDto.Response answerToResponse(Answer answer);

    //Gets 할 때 List<Answer> 필요
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    List<AnswerDto.Response> answersToResponses(List<Answer> answers);
}
