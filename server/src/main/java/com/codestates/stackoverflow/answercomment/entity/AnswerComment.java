package com.codestates.stackoverflow.answercomment.entity;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class AnswerComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerCommentId;
    @Column(columnDefinition="TEXT")
    private String body;
    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void setUser(User user) {
        this.user = user;
        if (!user.getAnswerCommentList().contains(this)) {
            user.getAnswerCommentList().add(this);
        }
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
        if (!answer.getAnswerCommentList().contains(this)) {
            answer.getAnswerCommentList().add(this);
        }
    }
}