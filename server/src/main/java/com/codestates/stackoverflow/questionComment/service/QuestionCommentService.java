package com.codestates.stackoverflow.questionComment.service;

import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.repository.QuestionRepository;
import com.codestates.stackoverflow.questionComment.entity.QuestionComment;
import com.codestates.stackoverflow.questionComment.repository.QuestionCommentRepository;
import com.codestates.stackoverflow.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionCommentService {
    private final QuestionRepository questionRepository;
    private final QuestionCommentRepository questionCommentRepository;

    public List<QuestionComment> createQuestionComment(QuestionComment comment, long questionId) { // 댓글 작성
        Question foundQuestion = findQuestionById(questionId); //questionId를 통해 findQuestionById 메소드로 Question 객체를 찾습니다.
        User user = comment.getUser(); // 작성자인 User 객체를 가져옵니다.

        comment.setQuestion(foundQuestion); //foundQuestion 객체 설정
        comment.setUser(user); //user 객체 설정
        foundQuestion.getQuestionCommentList().add(comment); //해당 질문의 댓글 목록에 comment 객체를 추가합니다.
        questionCommentRepository.save(comment);
        return questionCommentRepository.findByQuestionId(foundQuestion.getQuestionId());
    }

    public List<QuestionComment> editQuestionComment(QuestionComment comment, long questionId, long commentId) {
        Question findQuestion = findQuestionById(questionId); // 댓글 수정

        QuestionComment findComment = findQuestion.getQuestionCommentList().stream() //findQuestion 객체의 questionCommentList에서
                .filter(d -> d.getQuestionCommentId() == commentId) //commentId와 일치하는 QuestionComment 객체를 찾아서
                .findFirst()                            //해당 객체가 없는 경우 예외를 발생시킵니다.
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST));

        findComment.setBody(comment.getBody());
        questionCommentRepository.save(findComment);

        return questionCommentRepository.findByQuestionId(findQuestion.getQuestionId());
    }

    public List<QuestionComment> getQuestionComments(long questionId) { //댓글 조회
        Question question = findQuestionById(questionId);
        return questionCommentRepository.findByQuestionId(question.getQuestionId());
    }

    public List<QuestionComment> deleteQuestionComment(long questionId, long commentId) { // 댓글 삭제
        Question findQuestion = findQuestionById(questionId);
        QuestionComment verifiedComment = findVerifiedComment(commentId);

        findQuestion.getQuestionCommentList().stream() // findQuestion 객체의 questionCommentList에서
                .filter(d -> d.getQuestionCommentId() == commentId) // commentId와 일치하는 QuestionComment 객체를 찾아서
                .findFirst()                        // 해당 객체가 없는 경우 예외를 발생시킵니다.
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST));

        questionCommentRepository.deleteAllByIdInBatch(Collections.singleton(verifiedComment.getQuestionCommentId()));
        return questionCommentRepository.findByQuestionId(findQuestion.getQuestionId());
    }

    public Question findQuestionById(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }

    public QuestionComment findVerifiedComment(long questionCommentId) {
        Optional<QuestionComment> optionalQuestionComment = questionCommentRepository.findById(questionCommentId);
        QuestionComment findComment =
                optionalQuestionComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_COMMENT_NOT_FOUND));
        return findComment;
    }
}
