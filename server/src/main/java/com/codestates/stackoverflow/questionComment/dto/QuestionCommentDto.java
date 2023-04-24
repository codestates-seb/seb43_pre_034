package com.codestates.stackoverflow.questionComment.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;


public class QuestionCommentDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionCommentPostDto {
        private long userId;
        private long questionId;
        @NotBlank(message = "댓글 내용을 작성해야 합니다.")
        private String body;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionCommentPatchDto {
        private long questionCommentId;
        private long userId;
        private long questionId;
        @NotBlank(message = "댓글 내용을 작성해야 합니다.")
        private String body;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    public static class QuestionCommentResponseDto {
        private long questionCommentId;
        private long userId;
        private long questionId;
        private String body;
        private String createdAt;
        private String modifiedAt;
    }
}
