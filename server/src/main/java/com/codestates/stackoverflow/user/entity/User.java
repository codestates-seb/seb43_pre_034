package com.codestates.stackoverflow.user.entity;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import com.codestates.stackoverflow.audit.Auditable;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
@NoArgsConstructor
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false, updatable = false, unique = true)
    private String email;
    @Column(length = 100, nullable = false)
    private String password;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private Status status = Status.MEMBER_ACTIVE;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>(); // <ROLE_USER
    private int score;
    private int questionCount;
    private int answerCount;

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<QuestionComment> questionCommentList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<AnswerComment> answerCommentList = new ArrayList<>();

    public User(String email) {
        this.email = email;
    }

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public enum Status {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");
        @Getter
        private String status;
        Status(String status) {
            this.status = status;
        }
    }

    /**
     * Score 합산 기능
     */
    public void updateTotalScore() {
        int totalScore = 0;
        int questionScore = 0;
        int answerScore = 0;
        for (Question question : questions) {
            questionScore += question.getScore();
        }
        for (Answer answer : answers) {
            answerScore += answer.getScore();
        }

        totalScore = questionScore + answerScore;

        this.score = totalScore;
    }
}