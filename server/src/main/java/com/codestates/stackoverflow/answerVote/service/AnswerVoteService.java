package com.codestates.stackoverflow.answerVote.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.repository.AnswerRepository;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import org.springframework.stereotype.Service;

@Service
public class AnswerVoteService {

    private final AnswerVoteRepository answerVoteRepository;
    private final AnswerRepository answerRepository;

    public AnswerVoteService(AnswerVoteRepository answerVoteRepository, AnswerRepository answerRepository) {
        this.answerVoteRepository = answerVoteRepository;
        this.answerRepository = answerRepository;
    }

    public AnswerVote createAnswerVote(AnswerVote answerVote, long answerId) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        answer.addAnswerVote(answerVote);

        return answerVoteRepository.save(answerVote);
    }

    public AnswerVote updateAnswerVote(AnswerVote answerVote, AnswerVote.VoteType voteType) {
        AnswerVote findAnswerVote = answerVoteRepository.findById(answerVote.getAnswerVoteId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_VOTE_NOT_FOUND));

        if (findAnswerVote.getVoteType() == voteType) {
            answerVoteRepository.delete(answerVote);
        } else {
            findAnswerVote.setVoteType(voteType);
            return answerVoteRepository.save(findAnswerVote);
        }

        return findAnswerVote;
    }

    public void deleteAnswerVote(long answerVoteId) {
        answerVoteRepository.deleteById(answerVoteId);

    }
}