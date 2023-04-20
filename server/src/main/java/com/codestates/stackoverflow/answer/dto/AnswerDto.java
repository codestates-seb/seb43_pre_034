package com.codestates.stackoverflow.answer.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class PostDto {
        private long userId;
        private long questionId;

        @NotNull
        @Pattern(regexp = "^\\S", message = "Fill in the blank") //문자열의 시작이 공백 문자로 된 문자열이 아니어야한다는 의미
        private String body;

    }
    @Getter
    @AllArgsConstructor
    @Setter
    public static class PatchDto {
        private long answerId;

        @Pattern(regexp = "^\\S", message = "Fill in the blank")
        private String body;
    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ResponseDto {
        private long answerId;
        private long questionId;
        private long userId;
        private String body;
        private int score;
        private boolean checked;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String createdBy;
    }
}
