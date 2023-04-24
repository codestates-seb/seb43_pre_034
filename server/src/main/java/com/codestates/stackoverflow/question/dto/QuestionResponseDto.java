package com.codestates.stackoverflow.question.dto;

import lombok.*;

import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private long userId;
    private String name;
    private String title;
    private String body;
    private int score;
    private boolean checked;
    private List<String> tags;
    private String createdAt;
    private String modifiedAt;
}