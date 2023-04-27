package com.codestates.stackoverflow.questionVote.mapper;

import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto.QuestionVotePatchDto;
import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto.QuestionVotePostDto;
import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto.QuestionVoteResponseDto;
import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto.QuestionVoteResponseDto.QuestionVoteResponseDtoBuilder;
import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import com.codestates.stackoverflow.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-26T16:43:41+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class QuestionVoteMapperImpl implements QuestionVoteMapper {

    @Override
    public QuestionVote questionVotePostDto(QuestionVotePostDto questionVotePostDto) {
        if ( questionVotePostDto == null ) {
            return null;
        }

        QuestionVote questionVote = new QuestionVote();

        questionVote.setUser( questionVotePostDtoToUser( questionVotePostDto ) );
        questionVote.setQuestion( questionVotePostDtoToQuestion( questionVotePostDto ) );
        questionVote.setVoteType( questionVotePostDto.getVoteType() );

        return questionVote;
    }

    @Override
    public QuestionVote questionVotePatchDto(QuestionVotePatchDto questionVotePatchDto) {
        if ( questionVotePatchDto == null ) {
            return null;
        }

        QuestionVote questionVote = new QuestionVote();

        questionVote.setQuestionVoteId( questionVotePatchDto.getQuestionVoteId() );
        questionVote.setVoteType( questionVotePatchDto.getVoteType() );

        return questionVote;
    }

    @Override
    public QuestionVoteResponseDto questionVoteResponseDto(QuestionVote questionVote) {
        if ( questionVote == null ) {
            return null;
        }

        QuestionVoteResponseDtoBuilder questionVoteResponseDto = QuestionVoteResponseDto.builder();

        Long userId = questionVoteUserUserId( questionVote );
        if ( userId != null ) {
            questionVoteResponseDto.userId( userId );
        }
        Long questionId = questionVoteQuestionQuestionId( questionVote );
        if ( questionId != null ) {
            questionVoteResponseDto.questionId( questionId );
        }
        if ( questionVote.getQuestionVoteId() != null ) {
            questionVoteResponseDto.questionVoteId( questionVote.getQuestionVoteId() );
        }
        questionVoteResponseDto.voteType( questionVote.getVoteType() );

        return questionVoteResponseDto.build();
    }

    protected User questionVotePostDtoToUser(QuestionVotePostDto questionVotePostDto) {
        if ( questionVotePostDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( questionVotePostDto.getUserId() );

        return user;
    }

    protected Question questionVotePostDtoToQuestion(QuestionVotePostDto questionVotePostDto) {
        if ( questionVotePostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionVotePostDto.getQuestionId() );

        return question;
    }

    private Long questionVoteUserUserId(QuestionVote questionVote) {
        if ( questionVote == null ) {
            return null;
        }
        User user = questionVote.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private Long questionVoteQuestionQuestionId(QuestionVote questionVote) {
        if ( questionVote == null ) {
            return null;
        }
        Question question = questionVote.getQuestion();
        if ( question == null ) {
            return null;
        }
        Long questionId = question.getQuestionId();
        if ( questionId == null ) {
            return null;
        }
        return questionId;
    }
}
