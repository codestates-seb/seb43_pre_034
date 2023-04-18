package com.codestates.stackoverflow.answer.mapper;

import com.codestates.stackoverflow.answer.dto.AnswerDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "user_id", target = "user.user_id")
    @Mapping(source = "question_id", target = "question.question_id")
    Answer postToAnswer(AnswerDto.Post postDto);

    Answer patchToAnswer(AnswerDto.Patch patchDto);

    @Mapping(source = "user_id", target = "user.user_id")
    @Mapping(source = "question_id", target = "question.question_id")
    AnswerDto.Response answerToResponse(Answer answer);

    //Gets 할 때 List<Answer> 필요
    @Mapping(source = "user_id", target = "user.user_id")
    @Mapping(source = "question_id", target = "question.question_id")
    List<AnswerDto.Response> answersToResponses(List<Answer> answers);
}
