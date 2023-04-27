package com.codestates.stackoverflow.question.service;

import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.repository.QuestionRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import com.codestates.stackoverflow.user.entity.User;
import com.codestates.stackoverflow.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;

    public Question createQuestion(Question question) { //질문글 생성
        User user = question.getUser();
        Optional<User> verifiedUser = userRepository.findById(user.getUserId());
        if (!verifiedUser.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_CREATING_POST);
        }
        question.setUser(user);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) { //질문글 수정
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        User user = question.getUser();
        Optional<User> verifiedUser = userRepository.findById(user.getUserId());
        if (!verifiedUser.isPresent() || !findQuestion.getUser().getUserId().equals(user.getUserId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getBody())
                .ifPresent(body -> findQuestion.setBody(body));
        Optional.ofNullable(question.getTags())
                .ifPresent(tags -> findQuestion.setTags(tags));

        return questionRepository.save(findQuestion);
    }

    public Question getQuestion(long questionId) { //질문글 조회
        Question findQuestion = findVerifiedQuestion(questionId);

        return findQuestion;
    }

    public Page<Question> getQuestions(Pageable pageable) { //질문글 전체 조회
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(), pageable.getSort());
        return questionRepository.findAll(pageRequest);
    }

    public void deleteQuestion(long questionId) { //질문글 삭제
        Question findQuestion = findVerifiedQuestion(questionId);

        User user = findQuestion.getUser();
        Optional<User> verifiedUser = userRepository.findById(user.getUserId());
        if (!verifiedUser.isPresent() || !findQuestion.getUser().getUserId().equals(user.getUserId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }

        questionRepository.deleteById(questionId);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
