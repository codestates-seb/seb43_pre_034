package com.codestates.stackoverflow.questionComment.mapper;

import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto.QuestionCommentPatchDto;
import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto.QuestionCommentPostDto;
import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto.QuestionCommentResponseDto;
import com.codestates.stackoverflow.questionComment.dto.QuestionCommentDto.QuestionCommentResponseDto.QuestionCommentResponseDtoBuilder;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
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
public class QuestionCommentMapperImpl implements QuestionCommentMapper {

    @Override
    public QuestionComment commentPostDtoToQuestionComment(QuestionCommentPostDto commentPostDto) {
        if ( commentPostDto == null ) {
            return null;
        }

        QuestionComment questionComment = new QuestionComment();

        questionComment.setUser( questionCommentPostDtoToUser( commentPostDto ) );
        questionComment.setQuestion( questionCommentPostDtoToQuestion( commentPostDto ) );
        questionComment.setQuestionCommentId( commentPostDto.getQuestionCommentId() );
        questionComment.setBody( commentPostDto.getBody() );

        return questionComment;
    }

    @Override
    public QuestionComment commentPatchDtoToQuestionComment(QuestionCommentPatchDto commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        QuestionComment questionComment = new QuestionComment();

        questionComment.setUser( questionCommentPatchDtoToUser( commentPatchDto ) );
        questionComment.setQuestion( questionCommentPatchDtoToQuestion( commentPatchDto ) );
        questionComment.setQuestionCommentId( commentPatchDto.getQuestionCommentId() );
        questionComment.setBody( commentPatchDto.getBody() );

        return questionComment;
    }

    @Override
    public QuestionCommentResponseDto commentToCommentResponseDto(QuestionComment questionComment) {
        if ( questionComment == null ) {
            return null;
        }

        QuestionCommentResponseDtoBuilder questionCommentResponseDto = QuestionCommentResponseDto.builder();

        Long userId = questionCommentUserUserId( questionComment );
        if ( userId != null ) {
            questionCommentResponseDto.userId( userId );
        }
        Long questionId = questionCommentQuestionQuestionId( questionComment );
        if ( questionId != null ) {
            questionCommentResponseDto.questionId( questionId );
        }
        if ( questionComment.getQuestionCommentId() != null ) {
            questionCommentResponseDto.questionCommentId( questionComment.getQuestionCommentId() );
        }
        questionCommentResponseDto.body( questionComment.getBody() );
        questionCommentResponseDto.createdAt( questionComment.getCreatedAt() );
        questionCommentResponseDto.modifiedAt( questionComment.getModifiedAt() );

        return questionCommentResponseDto.build();
    }

    @Override
    public List<QuestionCommentResponseDto> questionCommentsToResponseDto(List<QuestionComment> questionComments) {
        if ( questionComments == null ) {
            return null;
        }

        List<QuestionCommentResponseDto> list = new ArrayList<QuestionCommentResponseDto>( questionComments.size() );
        for ( QuestionComment questionComment : questionComments ) {
            list.add( commentToCommentResponseDto( questionComment ) );
        }

        return list;
    }

    protected User questionCommentPostDtoToUser(QuestionCommentPostDto questionCommentPostDto) {
        if ( questionCommentPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( questionCommentPostDto.getUserId() );

        return user;
    }

    protected Question questionCommentPostDtoToQuestion(QuestionCommentPostDto questionCommentPostDto) {
        if ( questionCommentPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionCommentPostDto.getQuestionId() );

        return question;
    }

    protected User questionCommentPatchDtoToUser(QuestionCommentPatchDto questionCommentPatchDto) {
        if ( questionCommentPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( questionCommentPatchDto.getUserId() );

        return user;
    }

    protected Question questionCommentPatchDtoToQuestion(QuestionCommentPatchDto questionCommentPatchDto) {
        if ( questionCommentPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionCommentPatchDto.getQuestionId() );

        return question;
    }

    private Long questionCommentUserUserId(QuestionComment questionComment) {
        if ( questionComment == null ) {
            return null;
        }
        User user = questionComment.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private Long questionCommentQuestionQuestionId(QuestionComment questionComment) {
        if ( questionComment == null ) {
            return null;
        }
        Question question = questionComment.getQuestion();
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
