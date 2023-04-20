package com.codestates.stackoverflow.question.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

public class QuestionDto {

    @Setter
    @Getter
    @NoArgsConstructor
    public class QuestionPostDto {
        @NotEmpty(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotEmpty(message = "질문 내용을 작성해야 합니다.")
        private String body;
        private long userId;
    }

    @AllArgsConstructor
    @Setter
    @Getter
    public class QuestionPatchDto {
        @Length(min = 1)
        private String title;
        @Length(min = 1)
        private String body;
        private long userId;
        private long questionId;
    }
}
