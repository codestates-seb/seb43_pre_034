package com.codestates.stackoverflow.questionVote.entity;

import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionVoteId;
    @Enumerated(EnumType.STRING)
    private VoteType voteType;
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public enum VoteType {
        LIKE,
        DISLIKE
    }
}