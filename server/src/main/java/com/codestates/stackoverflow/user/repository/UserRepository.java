package com.codestates.stackoverflow.user.repository;

import com.codestates.stackoverflow.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    @Query("SELECT COUNT(q) FROM Question q WHERE q.user.userId = :userId")
    Long countQuestionByUserId(@Param("userId") Long userId);

    @Query("SELECT COUNT(a) FROM Answer a WHERE a.user.userId  = :userId")
    Long countAnswerByUserId(@Param("userId") Long userId);


}
