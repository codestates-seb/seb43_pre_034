package com.codestates.stackoverflow.user.mapper;

import com.codestates.stackoverflow.user.dto.UserDto;
import com.codestates.stackoverflow.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostToUser(UserDto.Post requestBody);
    User userPatchToUser(UserDto.Patch requestBody);
    UserDto.Response userToUserResponse(User user);
    UserDto.InfoResponse userToUserInfoResponse(User user);
    List<UserDto.Response> usersToUserResponses(List<User> users);
}