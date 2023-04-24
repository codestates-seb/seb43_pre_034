package com.codestates.stackoverflow.questionVote.service;

import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.service.QuestionService;
import com.codestates.stackoverflow.questionVote.entity.QuestionVote;
import com.codestates.stackoverflow.questionVote.repository.QuestionVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionVoteService {
    private final QuestionVoteRepository questionVoteRepository;
    private final QuestionService questionService;

    public QuestionVote createQuestionVote(QuestionVote questionVote, long questionId) {
        Question question = questionService.findVerifiedQuestion(questionId);

        if(question.getQuestionVoteList().stream()
                .anyMatch(av -> av.getUser().getUserId() == questionVote.getUser().getUserId())) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_VOTE_EXIST);
        }

        question.addQuestionVote(questionVote);

        return questionVoteRepository.save(questionVote);
    }

    public void updateQuestionVote(long questionVoteId, long userId, QuestionVote.VoteType voteType) {
        QuestionVote findQuestionVote = findVerifiedQuestionVote(questionVoteId);
        long masterUserId = findQuestionVote.getUser().getUserId();

        if (userId != masterUserId) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        Question question = findQuestionVote.getQuestion();

        if (findQuestionVote.getVoteType() == voteType) {
            question.removeQuestionVote(findQuestionVote);
            deleteQuestionVote(findQuestionVote.getQuestionVoteId(), userId);
        } else {
            findQuestionVote.setVoteType(voteType);
            question.updateScore();
            questionVoteRepository.save(findQuestionVote);
        }
    }
    public void deleteQuestionVote(long questionVoteId, long userId) {
        QuestionVote findQuestionVote = findVerifiedQuestionVote(questionVoteId);
        if (userId != findQuestionVote.getUser().getUserId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }
        questionVoteRepository.deleteById(questionVoteId);
    }

    public QuestionVote findVerifiedQuestionVote(long questionVoteId) {
        return questionVoteRepository.findById(questionVoteId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_VOTE_NOT_FOUND));
    }
}
