package com.codestates.stackoverflow.answerVote.repository;


import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {

}
