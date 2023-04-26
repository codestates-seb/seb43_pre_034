package com.codestates.stackoverflow.answercomment.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;

public class AnswerCommentDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class PostDto {

        private long userId;
        private long answerId;
        @NotBlank(message = "댓글 내용을 작성해야 합니다.")
        private String body;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Getter
    public static class PatchDto {
        private long answerCommentId;

        private long userId;
        @NotBlank(message = "댓글 내용을 작성해야 합니다.")
        private String body;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    public static class ResponseDto {
        private long answerCommentId;
        private long userId;
        private long answerId;
        private String body;
        private String createdAt;
        private String modifiedAt;
    }
}
