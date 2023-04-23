package com.codestates.stackoverflow.answercomment.repository;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment, Long> {

    Optional<Page<AnswerComment>> findByAnswerAnswerId(Long answerId, Pageable pageable);
}