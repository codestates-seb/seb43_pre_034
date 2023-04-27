package com.codestates.stackoverflow.questionComment.entity;

import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class QuestionComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionCommentId;
    @Column(columnDefinition="TEXT")
    private String body;
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void setUser(User user) {
        this.user = user;
        if (!user.getQuestionCommentList().contains(this)) {
            user.getQuestionCommentList().add(this);
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if (!question.getQuestionCommentList().contains(this)) {
            question.getQuestionCommentList().add(this);
        }
    }
}