package com.codestates.stackoverflow.answerVote.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.service.AnswerService;
import com.codestates.stackoverflow.answerVote.entity.AnswerVote;
import com.codestates.stackoverflow.answerVote.repository.AnswerVoteRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerVoteService {

    private final AnswerVoteRepository answerVoteRepository;

    private final AnswerService answerService;



    public AnswerVote createAnswerVote(AnswerVote answerVote) {
        Answer findAnswer = answerService.findVerifiedAnswer(answerVote.getAnswer().getAnswerId());

        if(findAnswer.getAnswerVotes().stream()
                        .anyMatch(av -> av.getUser().getUserId() == findAnswer.getUser().getUserId())) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_VOTE_EXIST);
        }

        findAnswer.addAnswerVote(answerVote);

        return answerVoteRepository.save(answerVote);
    }

    public void updateAnswerVote(AnswerVote answerVote) {
        AnswerVote findAnswerVote = findVerifiedAnswerVote(answerVote.getAnswerVoteId());
        long masterUserId = findAnswerVote.getUser().getUserId();

        if (answerVote.getUser().getUserId() != masterUserId) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
            Answer answer = findAnswerVote.getAnswer();

            if (findAnswerVote.getVoteType() == answerVote.getVoteType()) {        //기존 voteType 을 재클릭 시 vote 삭제
                answer.removeAnswerVote(findAnswerVote);
                deleteAnswerVote(findAnswerVote.getAnswerVoteId());
            } else {                                               //다른 voteType 클릭 시 voteType 변경 후 저장(answer score 최신화)
                findAnswerVote.setVoteType(answerVote.getVoteType());
                answer.updateScore();
                answerVoteRepository.save(findAnswerVote);
            }

        }

    public void deleteAnswerVote(long answerVoteId) {
        answerVoteRepository.deleteById(answerVoteId);
    }

    public AnswerVote findVerifiedAnswerVote(long answerVoteId) {
        Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findById(answerVoteId);
        return optionalAnswerVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_VOTE_NOT_FOUND));
    }


}
