package com.codestates.stackoverflow.question.entity;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
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
    @Column(columnDefinition = "BOOLEAN NOT NULL")
    private boolean checked =false;
    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> tags = new ArrayList<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.MERGE})
    private List<QuestionComment> questionCommentList = new ArrayList<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL})
    private List<QuestionVote> questionVoteList = new ArrayList<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL})
    private List<Answer> answerList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void setUser(User user) {
        this.user = user;
        if (!user.getQuestions().contains(this)) {
            user.getQuestions().add(this);
        }
    }

    public void setAnswer(Answer answer) {
        this.getAnswerList().add(answer);
        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

    public void addQuestionVote(QuestionVote questionVote) {
        this.questionVoteList.add(questionVote);
        questionVote.setQuestion(this);
        updateScore();
    }

    public void removeQuestionVote(QuestionVote questionVote) {
        this.questionVoteList.remove(questionVote);
        if(questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
        updateScore();
    }

    public void updateScore() {
        this.score = questionVoteList.stream()
                .mapToInt(questionVote -> {
                    if (questionVote.getVoteType() == QuestionVote.VoteType.LIKE) {
                        return 1;
                    } else if (questionVote.getVoteType() == QuestionVote.VoteType.DISLIKE) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                .sum();
    }
}
