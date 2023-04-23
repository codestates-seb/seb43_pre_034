package com.codestates.stackoverflow.answercomment.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.service.AnswerService;
import com.codestates.stackoverflow.answercomment.entity.AnswerComment;
import com.codestates.stackoverflow.answercomment.repository.AnswerCommentRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;

import com.codestates.stackoverflow.user.entity.User;
import com.codestates.stackoverflow.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;
    private final AnswerService answerService;

    private final UserService userService;

    public AnswerComment createAnswerComment(AnswerComment answerComment, long answerId ,long userId) { // 댓글 작성
        Answer findAnswer = answerService.findVerifiedAnswer(answerId);
        User findUser = userService.findVerifiedUser(userId);

        answerComment.setAnswer(findAnswer);
        answerComment.setUser(findUser);

        findAnswer.getAnswerCommentList().add(answerComment);

        return answerCommentRepository.save(answerComment);
    }
    public AnswerComment updateAnswerComment(AnswerComment answerComment, long userId, long answerCommentId) {


        AnswerComment findComment = findVerifiedComment(answerCommentId);

        if (userId != findComment.getUser().getUserId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        Optional.ofNullable(answerComment.getBody())
                .ifPresent(findComment::setBody);

        return answerCommentRepository.save(findComment);
    }
    public Page<AnswerComment> findAnswerComments(long answerId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("answerCommentId").descending());
        Optional<Page<AnswerComment>> optionalAnswerComments = answerCommentRepository.findByAnswerAnswerId(answerId,pageable);

        Page<AnswerComment> answerCommentPage = optionalAnswerComments.orElseThrow(
                () ->  new BusinessLogicException(ExceptionCode.ANSWER_COMMENT_NOT_FOUND));

        return answerCommentPage;
        }

    public void deleteAnswerComment(long answerCommentId , long userId) {


        AnswerComment findAnswerComment = findVerifiedComment(answerCommentId);

        if (userId != findAnswerComment.getUser().getUserId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }
        answerCommentRepository.delete(findAnswerComment);
    }

    public AnswerComment findVerifiedComment(long answerCommentId) {
        Optional<AnswerComment> optionalAnswerComment = answerCommentRepository.findById(answerCommentId);

        return    optionalAnswerComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_COMMENT_NOT_FOUND));

    }
}
