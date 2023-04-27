package com.codestates.stackoverflow.answerVote.entity;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "ANSWERVOTES")
@Getter
@Setter
public class AnswerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerVoteId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @Enumerated(EnumType.STRING)
    private VoteType voteType;


    public enum VoteType {
        LIKE,
        DISLIKE
    }



}


