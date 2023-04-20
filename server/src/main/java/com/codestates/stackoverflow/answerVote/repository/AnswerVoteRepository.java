package com.codestates.stackoverflow.answerVote.repository;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {

    Optional<AnswerVote> findByUserAndAnswer(User user, Answer answer);
}
