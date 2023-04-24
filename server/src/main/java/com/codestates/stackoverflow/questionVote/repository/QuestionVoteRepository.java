package com.codestates.stackoverflow.questionVote.repository;

import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote,Long> {

}
