package com.codestates.stackoverflow.answer.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.answer.mapper.AnswerMapper;
import com.codestates.stackoverflow.answer.repository.AnswerRepository;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.user.service.UserService;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final UserService userService;
    private final QuestionService questionService;
    private final AnswerMapper mapper;

    public AnswerService(AnswerRepository answerRepository, UserService userService, QuestionService questionService, AnswerMapper mapper) {
        this.answerRepository = answerRepository;
        this.userService = userService;
        this.questionService = questionService;
        this.mapper = mapper;
    }

    public Answer createAnswer(Answer answer, Long userId, Long questionId) {
        Question findQuestion = questionService.findVerifiedQuestion(questionId);
        User findUser = userService.findVerifiedUser(userId);

        answer.setUser(findUser);
        answer.setQuestion(findQuestion);

        return answerRepository.save(answer);

    }
    // 기본적인 답변글 수정 기능
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getBody())
                .ifPresent(findAnswer::setBody);

        return answerRepository.save(findAnswer);
    }


    // check 필드 변경만을 위한 update 기능
    public Answer updateCheck(Long userId, Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Long masterUserId = findAnswer.getQuestion().getUser().getUserId();
        if(masterUserId==userId) {
            if (!findAnswer.isCheck()) {
                findAnswer.setCheck(true);
            } else {
                findAnswer.setCheck(false);
            }
        }
        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(Long answerId) {

        return findVerifiedAnswer(answerId);
    }

    //questionId에 해당하는 답변글 모두 조회해서 가져옴
    public Page<Answer> findAnswers(Long questionId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("answerId").descending());
        Optional<Page<Answer>> optionalAnswers =answerRepository.findByQuestionQuestionId(questionId,pageable);

        Page<Answer> answerPage = optionalAnswers.orElseThrow(() -> new RuntimeException("답변이 없습니다"));
        return answerPage;
    }

    public void deleteAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        answerRepository.delete(findAnswer);
    }
    //답변이 없는 경우가 있기 때문에 Optional  사용
    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(() -> new RuntimeException("답변이 없습니다"));
    }
}
