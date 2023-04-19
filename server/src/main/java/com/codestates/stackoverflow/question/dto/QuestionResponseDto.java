package com.codestates.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class QuestionResponseDto {
    private long questionId;
    private long userId;
    private String name;
    private String title;
    private String body;
    private int score;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}