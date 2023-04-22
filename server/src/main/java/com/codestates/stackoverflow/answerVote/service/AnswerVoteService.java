package com.codestates.stackoverflow.answerVote.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.repository.AnswerRepository;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerVoteService {

    private final AnswerVoteRepository answerVoteRepository;
    private final AnswerRepository answerRepository;



    public AnswerVote createAnswerVote(AnswerVote answerVote, long answerId) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        answer.addAnswerVote(answerVote);

        return answerVoteRepository.save(answerVote);
    }

    public AnswerVote updateAnswerVote(long answerVoteId, AnswerVote.VoteType voteType) {
        AnswerVote findAnswerVote = answerVoteRepository.findById(answerVoteId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_VOTE_NOT_FOUND));


        Answer answer = findAnswerVote.getAnswer();


        if (findAnswerVote.getVoteType() == voteType) {
            answer.removeAnswerVote(findAnswerVote);
            answerVoteRepository.deleteById(findAnswerVote.getAnswerVoteId());

        } else {
            findAnswerVote.setVoteType(voteType);
            answer.updateScore();
            return answerVoteRepository.save(findAnswerVote);
        }

        return findAnswerVote;
    }

    public void deleteAnswerVote(long answerVoteId) {
        answerVoteRepository.deleteById(answerVoteId);

    }
}
