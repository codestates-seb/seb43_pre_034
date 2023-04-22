package com.codestates.stackoverflow.answer.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
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

        @NotBlank(message = "Fill in the blank")
        private String body;

    }
    @Getter
    @AllArgsConstructor
    @Setter
    public static class PatchDto {
        private long answerId;

        @NotBlank(message = "Fill in the blank")
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
        private String createdAt;
        private String modifiedAt;
    }
}
