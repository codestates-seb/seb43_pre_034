package com.codestates.stackoverflow.answer.repository;

import com.codestates.stackoverflow.answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Optional<Page<Answer>> findByQuestionQuestionId(Long questionId, Pageable pageable);
}
