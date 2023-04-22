package com.codestates.stackoverflow.answer.entity;

import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.mapper.AnswerVoteMapper;
import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.question.entity.Question;

import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


import javax.persistence.Entity;
import javax.persistence.*;
import java.util.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String body;

    @Column(nullable = false)
    private int score=0;

    @Column(columnDefinition = "BOOLEAN NOT NULL")
    private boolean cheked = false;

    @OneToMany(mappedBy = "answer", cascade = {CascadeType.ALL})
    private List<AnswerVote> answerVotes = new ArrayList<>();


    public void setUser(User user) { //user와 answer 연관관계매핑 , List<Answer> 에 추가해준다
        this.user = user;
        if (!this.user.getAnswers().contains(this)){
            this.user.getAnswers().add(this);
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if (!this.question.getAnswerList().contains(this)){
            this.question.getAnswerList().add(this);
        }
    }

    public void addAnswerVote(AnswerVote answerVote) { //answer 와 answerVoto 매핑
        this.answerVotes.add(answerVote);
        if(answerVote.getAnswer() != this) {
            answerVote.setAnswer(this);
        }
        updateScore();
    }

    public void removeAnswerVote(AnswerVote answerVote) {
        this.answerVotes.remove(answerVote);
        if(answerVote.getAnswer() != this) {
            answerVote.setAnswer(this);
        }
        updateScore();
    }
    public void updateScore() {
        int score = 0;

        for (AnswerVote answerVote : answerVotes) {
            if(answerVote.getVoteType() == AnswerVote.VoteType.LIKE) {
                score++;
            } else if (answerVote.getVoteType() == AnswerVote.VoteType.DISLIKE) {
                score--;
            }
        }
        this.score = score;
    }
}
