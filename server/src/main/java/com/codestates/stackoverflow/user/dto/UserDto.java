package com.codestates.stackoverflow.user.dto;

import com.codestates.stackoverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class UserDto {

    public static class Post {
        @NotBlank(message = "이름을 입력해주세요.")
        private String name;
        @Email
        @NotBlank(message = "이메일을 입력해주세요.")
        private String email;
        @NotBlank(message = "비밀번호를 입력해주세요.")
        private String password;
    }

    public static class Patch {
        private long userId;

        @NotBlank(message = "이름을 입력해주세요.")
        private String name;

        private User.Status status;
    }

    public static class Response {
        private long userId;
        private String name;
        private String email;
        private User.Status status;
        private int score;
    }
}
