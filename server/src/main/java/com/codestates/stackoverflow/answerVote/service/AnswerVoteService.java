package com.codestates.stackoverflow.answerVote.service;

import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import org.springframework.stereotype.Service;

@Service
public class AnswerVoteService {

    private final AnswerVoteRepository answerVoteRepository;

    public AnswerVoteService(AnswerVoteRepository answerVoteRepository) {
        this.answerVoteRepository = answerVoteRepository;
    }

    public AnswerVote createAnswerVote(AnswerVote answerVote) {

        return answerVoteRepository.save(answerVote);
    }

    public AnswerVote updateAnswerVote(AnswerVote answerVote, AnswerVote.VoteType voteType) {
        AnswerVote findAnswerVote = answerVoteRepository.findById(answerVote.getAnswerVoteId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid AnswerVote ID"));

        if (findAnswerVote.getVoteType() == voteType) {
            answerVoteRepository.delete(answerVote);
        } else {
            findAnswerVote.setVoteType(voteType);
            return answerVoteRepository.save(findAnswerVote);
        }

        return findAnswerVote;
    }

    public void deleteAnswerVote(Long answerVoteId) {
        answerVoteRepository.deleteById(answerVoteId);

    }
}
