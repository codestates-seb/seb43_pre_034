package com.codestates.stackoverflow.user.mapper;

import com.codestates.stackoverflow.user.dto.UserDto.InfoResponse;
import com.codestates.stackoverflow.user.dto.UserDto.InfoResponse.InfoResponseBuilder;
import com.codestates.stackoverflow.user.dto.UserDto.Patch;
import com.codestates.stackoverflow.user.dto.UserDto.Post;
import com.codestates.stackoverflow.user.dto.UserDto.Response;
import com.codestates.stackoverflow.user.dto.UserDto.Response.ResponseBuilder;
import com.codestates.stackoverflow.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-26T10:46:09+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setName( requestBody.getName() );
        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );

        return user;
    }

    @Override
    public User userPatchToUser(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( requestBody.getUserId() );
        user.setName( requestBody.getName() );
        user.setStatus( requestBody.getStatus() );

        return user;
    }

    @Override
    public Response userToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        if ( user.getUserId() != null ) {
            response.userId( user.getUserId() );
        }
        response.name( user.getName() );
        response.email( user.getEmail() );
        response.status( user.getStatus() );
        response.score( user.getScore() );
        response.questionCount( user.getQuestionCount() );
        response.answerCount( user.getAnswerCount() );

        return response.build();
    }

    @Override
    public InfoResponse userToUserInfoResponse(User user) {
        if ( user == null ) {
            return null;
        }

        InfoResponseBuilder infoResponse = InfoResponse.builder();

        if ( user.getUserId() != null ) {
            infoResponse.userId( user.getUserId() );
        }
        infoResponse.name( user.getName() );
        infoResponse.score( user.getScore() );
        infoResponse.questionCount( user.getQuestionCount() );
        infoResponse.answerCount( user.getAnswerCount() );
        infoResponse.createdAt( user.getCreatedAt() );

        return infoResponse.build();
    }

    @Override
    public List<Response> usersToUserResponses(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( users.size() );
        for ( User user : users ) {
            list.add( userToUserResponse( user ) );
        }

        return list;
    }
}
