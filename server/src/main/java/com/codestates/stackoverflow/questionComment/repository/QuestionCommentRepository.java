package com.codestates.stackoverflow.questionComment.repository;

import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment, Long> {
    @Override
    List<QuestionComment> findAll();
    @Query(value = "SELECT * FROM question_comment WHERE question_id = :questionId", nativeQuery = true)
    List<QuestionComment> findByQuestionId(long questionId);
}