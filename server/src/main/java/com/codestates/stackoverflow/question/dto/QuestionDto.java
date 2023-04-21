package com.codestates.stackoverflow.question.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

public class QuestionDto {
    @Setter
    @Getter
    @NoArgsConstructor
    public static class QuestionPostDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String body;
        private long userId;
        private long questionId;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionPatchDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String body;
        private long userId;
        private long questionId;
    }
}
