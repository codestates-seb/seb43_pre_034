package com.codestates.stackoverflow.answer.mapper;

import com.codestates.stackoverflow.answer.dto.AnswerDto;
import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {



    default Answer postToAnswer(AnswerDto.PostDto postDto){
        if(postDto == null) {
            return null;
        } else {
            Answer answer = new Answer();
            Question question = new Question();
            question.setQuestionId(postDto.getQuestionId());
            User user = new User();
            user.setUserId(postDto.getUserId());

            answer.setTitle(postDto.getTitle());
            answer.setBody(postDto.getBody());
            answer.setQuestion(question);
            answer.setUser(user);
            return answer;
        }
    }

    default Answer patchToAnswer(AnswerDto.PatchDto patchDto) {
        if (patchDto == null) {
            return null;
        } else {
            Answer answer = new Answer();

            answer.setAnswerId(patchDto.getAnswerId());
            answer.setTitle((patchDto.getTitle()));
            answer.setBody(patchDto.getBody());
            return answer;
        }
    }

    default AnswerDto.ResponseDto answerToResponse(Answer answer) {
        if (answer == null) {
            return null;
        }
        return AnswerDto.ResponseDto.builder()
                .answerId(answer.getAnswerId())
                .questionId(answer.getQuestion().getQuestionId())
                .title(answer.getTitle())
                .body(answer.getBody())
                .score(answer.getScore())
                .userId(answer.getUser().getUserId())
                .checked(answer.isCheked())
                .createdAt(answer.getCreatedAt())
                .modifiedAt(answer.getModifiedAt())
                .build();
    }

    List<AnswerDto.ResponseDto> answersToResponses(List<Answer> answers);
}
