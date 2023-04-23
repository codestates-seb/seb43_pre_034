package com.codestates.stackoverflow.answerVote.mapper;

import com.codestates.stackoverflow.answerVote.dto.AnswerVoteDto;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    AnswerVote postToVote(AnswerVoteDto.PostDto requestBody);

    AnswerVote patchToVote(AnswerVoteDto.PatchDto requestBody);

    @Mapping(source = "user.userId", target = "userId" )
    @Mapping(source = "answer.answerId", target = "answerId")
    AnswerVoteDto.ResponseDto voteToResponse(AnswerVote answerVote);
}
