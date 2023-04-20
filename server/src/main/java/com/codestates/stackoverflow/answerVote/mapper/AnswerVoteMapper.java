package com.codestates.stackoverflow.answerVote.mapper;

import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {

    AnswerVote postToVote(AnswerVoteDto.PostDto requestBody);

    AnswerVote patchToVote(AnswerVoteDto.PatchDto requestBody);

    @Mapping(source = "user.userId", target = "userId" )
    AnswerVoteDto.ResponseDto voteToResponse(AnswerVote answerVote);
}
