package com.codestates.stackoverflow.answerVote.dto;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


public class AnswerVoteDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostDto {
        private long userId;
        private long answerId;
        private AnswerVote.VoteType voteType;
    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PatchDto {
        private long answerVoteId;
        private long userId;
        private AnswerVote.VoteType voteType;

    }

    @AllArgsConstructor
    @Getter
    public static class ResponseDto {
        private long answerVoteId;
        private long userId;
        private long answerId;
        private AnswerVote.VoteType voteType;
    }
}
