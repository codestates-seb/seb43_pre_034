package com.codestates.stackoverflow.questionVote.mapper;

import com.codestates.stackoverflow.questionVote.dto.QuestionVoteDto;
import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    QuestionVote questionVotePostDto(QuestionVoteDto.QuestionVotePostDto questionVotePostDto);
    QuestionVote questionVotePatchDto(QuestionVoteDto.QuestionVotePatchDto questionVotePatchDto);
    @Mapping(source = "user.userId", target = "userId" )
    @Mapping(source = "question.questionId", target = "questionId")
    QuestionVoteDto.QuestionVoteResponseDto questionVoteResponseDto(QuestionVote questionVote);
}
