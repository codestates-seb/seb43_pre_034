package com.codestates.stackoverflow.question.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

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
        @Size(max=10, message = "태그는 최대 10개까지 가능합니다.")
        private List<String> tags;
    }

    @AllArgsConstructor
    @NoArgsConstructor // 추가 했습니다.
    @Setter
    @Getter
    public static class QuestionPatchDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String body;
        private long userId;
        private long questionId;
        @Size(max=10, message = "태그는 최대 10개까지 가능합니다.")
        private List<String> tags;
    }
}
