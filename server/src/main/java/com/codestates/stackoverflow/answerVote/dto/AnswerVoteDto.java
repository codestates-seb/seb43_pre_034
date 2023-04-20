package com.codestates.stackoverflow.answerVote.dto;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import lombok.AllArgsConstructor;
import lombok.Getter;



public class AnswerVoteDto {

    @Getter
    public static class PostDto {
        private Long userId;
        private Long answerId;
        private AnswerVote.VoteType voteType;
    }
    @Getter
    @AllArgsConstructor
    public static class PatchDto {
        private Long answerVoteId;
        private AnswerVote.VoteType voteType;

        public void setAnswerVoteId(Long answerVoteId) {
            this.answerVoteId = answerVoteId;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class ResponseDto {
        private Long answerVoteId;
        private Long userId;
        private Long answerId;
        private AnswerVote.VoteType voteType;
    }
}
