package com.codestates.stackoverflow.answer.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;


public class AnswerDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostDto {
        private long userId;
        private long questionId;

        @NotBlank(message = "Fill in the blank")
        private String body;

    }
    @Getter
    @AllArgsConstructor
    @Setter
    @NoArgsConstructor
    public static class PatchDto {

        private long answerId;

        private long userId;

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
        private String name;
        private String body;
        private int score;
        private boolean checked;
        private String createdAt;
        private String modifiedAt;
    }
}
