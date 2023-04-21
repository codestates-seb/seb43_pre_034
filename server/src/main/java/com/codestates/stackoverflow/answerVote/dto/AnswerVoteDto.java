package com.codestates.stackoverflow.answerVote.dto;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import lombok.AllArgsConstructor;
import lombok.Getter;



public class AnswerVoteDto {

    @Getter
    @AllArgsConstructor
    public static class PostDto {
        private long userId;
        private long answerId;
        private AnswerVote.VoteType voteType;
    }
    @Getter
    @AllArgsConstructor
    public static class PatchDto {
        private long answerVoteId;

        private long userId;

        private long answerId;
        private AnswerVote.VoteType voteType;

        public void setAnswerVoteId(long answerVoteId) {
            this.answerVoteId = answerVoteId;
        }
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
