package com.codestates.stackoverflow.answer.mapper;

import com.codestates.stackoverflow.answer.dto.AnswerDto.ResponseDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-25T14:49:49+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public List<ResponseDto> answersToResponses(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<ResponseDto> list = new ArrayList<ResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToResponse( answer ) );
        }

        return list;
    }
}
