package com.codestates.stackoverflow.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class AnswerDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private Long userId;
        private Long questionId;

        @NotNull
        @Pattern(regexp = "^\\S", message = "Fill in the blank") //문자열의 시작이 공백 문자로 된 문자열이 아니어야한다는 의미
        private String body;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long answerId;

        @Pattern(regexp = "^\\S", message = "Fill in the blank")
        private String body;
    }

    public static class Response {
        private Long answerId;
        private Long questionId;
        private Long userId;
        private String body;
        private int score;
        private boolean check;
    }
}
