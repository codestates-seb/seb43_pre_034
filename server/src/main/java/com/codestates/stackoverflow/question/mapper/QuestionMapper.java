package com.codestates.stackoverflow.question.mapper;

import com.codestates.stackoverflow.question.dto.QuestionDto;
import com.codestates.stackoverflow.question.dto.QuestionResponseDto;
import com.codestates.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mapping(source = "userId", target = "user.userId")
    Question questionPostDtoToQuestion(QuestionDto.QuestionPostDto questionPostDto);

    @Mapping(source = "userId", target = "user.userId")
    Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto questionPatchDto);

    @Mapping(source = "user.userId", target = "userId")
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    @Mapping(source = "user.userId", target = "userId")
    List<QuestionResponseDto> questionsToResponseDto(List<Question>questions);
}
