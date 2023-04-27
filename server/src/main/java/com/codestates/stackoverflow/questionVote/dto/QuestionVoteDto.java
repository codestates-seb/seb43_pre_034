package com.codestates.stackoverflow.questionVote.dto;

import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import lombok.*;

public class QuestionVoteDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionVotePostDto {
        private QuestionVote.VoteType voteType;
        private long questionId;
        private long userId;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionVotePatchDto {
        private long questionVoteId;
        private QuestionVote.VoteType voteType;
        private long userId;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    public static class QuestionVoteResponseDto {
        private long questionVoteId;
        private long userId;
        private long questionId;
        private QuestionVote.VoteType voteType;
    }
}
