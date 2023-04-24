package com.codestates.stackoverflow.answercomment.mapper;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto.PatchDto;
import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto.PostDto;
import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto.ResponseDto;
import com.codestates.stackoverflow.answercomment.dto.AnswerCommentDto.ResponseDto.ResponseDtoBuilder;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import com.codestates.stackoverflow.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-24T09:35:34+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerCommentMapperImpl implements AnswerCommentMapper {

    @Override
    public AnswerComment postToComment(PostDto postDto) {
        if ( postDto == null ) {
            return null;
        }

        AnswerComment answerComment = new AnswerComment();

        answerComment.setUser( postDtoToUser( postDto ) );
        answerComment.setAnswer( postDtoToAnswer( postDto ) );
        answerComment.setBody( postDto.getBody() );

        return answerComment;
    }

    @Override
    public AnswerComment patchToComment(PatchDto patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        AnswerComment answerComment = new AnswerComment();

        answerComment.setAnswerCommentId( patchDto.getAnswerCommentId() );
        answerComment.setBody( patchDto.getBody() );

        return answerComment;
    }

    @Override
    public ResponseDto commentToResponse(AnswerComment answerComment) {
        if ( answerComment == null ) {
            return null;
        }

        ResponseDtoBuilder responseDto = ResponseDto.builder();

        Long userId = answerCommentUserUserId( answerComment );
        if ( userId != null ) {
            responseDto.userId( userId );
        }
        Long answerId = answerCommentAnswerAnswerId( answerComment );
        if ( answerId != null ) {
            responseDto.answerId( answerId );
        }
        if ( answerComment.getAnswerCommentId() != null ) {
            responseDto.answerCommentId( answerComment.getAnswerCommentId() );
        }
        responseDto.body( answerComment.getBody() );
        responseDto.createdAt( answerComment.getCreatedAt() );
        responseDto.modifiedAt( answerComment.getModifiedAt() );

        return responseDto.build();
    }

    @Override
    public List<ResponseDto> commentsToResponses(List<AnswerComment> answerComments) {
        if ( answerComments == null ) {
            return null;
        }

        List<ResponseDto> list = new ArrayList<ResponseDto>( answerComments.size() );
        for ( AnswerComment answerComment : answerComments ) {
            list.add( commentToResponse( answerComment ) );
        }

        return list;
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

    private Long answerCommentUserUserId(AnswerComment answerComment) {
        if ( answerComment == null ) {
            return null;
        }
        User user = answerComment.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private Long answerCommentAnswerAnswerId(AnswerComment answerComment) {
        if ( answerComment == null ) {
            return null;
        }
        Answer answer = answerComment.getAnswer();
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
