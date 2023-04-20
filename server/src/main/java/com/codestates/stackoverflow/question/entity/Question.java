package com.codestates.stackoverflow.question.entity;


import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false, columnDefinition="TEXT")
    private String body;
    @Column
    private int score=0;
//    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
//    private List<QuestionComment> questionCommentList = new ArrayList<>();
//    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
//    private List<QuestionVote> questionVoteList = new ArrayList<>();
//    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
//    private List<Answer> answerList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

//    public void setQuestionComment(QuestionComment questionComment) {
//        this.getQuestionCommentList().add(questionComment);
//        if (questionComment.getQuestion() != this) {
//            questionComment.setQuestion(this);
//        }
//    }
//
//    public void setQuestionVote(QuestionVote questionVote) {
//        this.getQuestionVoteList().add(questionVote);
//        if (questionVote.getQuestion() != this) {
//            questionVote.setQuestion(this);
//        }
//    }
//    public void setUser(User user) {
//        this.user = user;
//        if (!user.getQuestionList().contains(this)) {
//            user.getQuestionList().add(this);
//        }
//    }
//
//    public void setAnswer(Answer answer) {
//        this.getAnswerList().add(answer);
//        if (answer.getQuestion() != this) {
//            answer.setQuestion(this);
//        }
//    }
}
