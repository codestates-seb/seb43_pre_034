package com.codestates.stackoverflow.answerVote.mapper;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto.PatchDto;
import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto.PostDto;
import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto.ResponseDto;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote.VoteType;
import com.codestates.stackoverflow.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-25T14:49:48+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerVoteMapperImpl implements AnswerVoteMapper {

    @Override
    public AnswerVote postToVote(PostDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerVote answerVote = new AnswerVote();

        answerVote.setUser( postDtoToUser( requestBody ) );
        answerVote.setAnswer( postDtoToAnswer( requestBody ) );
        answerVote.setVoteType( requestBody.getVoteType() );

        return answerVote;
    }

    @Override
    public AnswerVote patchToVote(PatchDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerVote answerVote = new AnswerVote();

        answerVote.setAnswerVoteId( requestBody.getAnswerVoteId() );
        answerVote.setVoteType( requestBody.getVoteType() );

        return answerVote;
    }

    @Override
    public ResponseDto voteToResponse(AnswerVote answerVote) {
        if ( answerVote == null ) {
            return null;
        }

        long userId = 0L;
        long answerId = 0L;
        long answerVoteId = 0L;
        VoteType voteType = null;

        Long userId1 = answerVoteUserUserId( answerVote );
        if ( userId1 != null ) {
            userId = userId1;
        }
        Long answerId1 = answerVoteAnswerAnswerId( answerVote );
        if ( answerId1 != null ) {
            answerId = answerId1;
        }
        if ( answerVote.getAnswerVoteId() != null ) {
            answerVoteId = answerVote.getAnswerVoteId();
        }
        voteType = answerVote.getVoteType();

        ResponseDto responseDto = new ResponseDto( answerVoteId, userId, answerId, voteType );

        return responseDto;
    }

    protected User postDtoToUser(PostDto postDto) {
        if ( postDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( postDto.getUserId() );

        return user;
    }

    protected Answer postDtoToAnswer(PostDto postDto) {
        if ( postDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( postDto.getAnswerId() );

        return answer;
    }

    private Long answerVoteUserUserId(AnswerVote answerVote) {
        if ( answerVote == null ) {
            return null;
        }
        User user = answerVote.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private Long answerVoteAnswerAnswerId(AnswerVote answerVote) {
        if ( answerVote == null ) {
            return null;
        }
        Answer answer = answerVote.getAnswer();
        if ( answer == null ) {
            return null;
        }
        Long answerId = answer.getAnswerId();
        if ( answerId == null ) {
            return null;
        }
        return answerId;
    }
}
