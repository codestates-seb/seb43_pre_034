package com.codestates.stackoverflow.answer.service;

import com.codestates.stackoverflow.answer.entity.Answer;
import com.codestates.stackoverflow.question.repository.QuestionRepository;
import com.codestates.stackoverflow.user.entity.User;
import com.codestates.stackoverflow.answer.repository.AnswerRepository;
import com.codestates.stackoverflow.exception.BusinessLogicException;
import com.codestates.stackoverflow.exception.ExceptionCode;
import com.codestates.stackoverflow.question.entity.Question;
import com.codestates.stackoverflow.question.service.QuestionService;
import com.codestates.stackoverflow.user.repository.UserRepository;
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
@Transactional
@RequiredArgsConstructor
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final UserService userService;
    private final QuestionService questionService;

    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;


    public Answer createAnswer(Answer answer) {

        User findUser = userService.findVerifiedUser(answer.getUser().getUserId());

        Question findQuestion = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());

        answer.setUser(findUser);
        answer.setQuestion(findQuestion);

        return answerRepository.save(answer);

    }
    // 기본적인 답변글 수정 기능
    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        User findUser = userService.findVerifiedUser(findAnswer.getUser().getUserId());

        if (findUser.getUserId() != answer.getUser().getUserId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        Optional.ofNullable(answer.getBody())
                .ifPresent(findAnswer::setBody);
        return answerRepository.save(findAnswer);
    }


    // check 필드 변경만을 위한 update 기능
    public Answer updateCheck(long userId, long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        long masterUserId = findAnswer.getQuestion().getUser().getUserId();
        if(masterUserId!=userId){
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        if (!findAnswer.isCheked()) {                                                //findAnswer의 체크가 안되어 있으면 체크해준다
            findAnswer.setCheked(true);
            long questionId =findAnswer.getQuestion().getQuestionId();
            Question findQuestion = questionService.findVerifiedQuestion(questionId);          //findAnswer와 연결된 questionId를 통해 question검색
            findQuestion.setChecked(true);                                         //question의 check 를 변경

            } else {                                                                     //findAnswer의 체크가 되어 있다면 체크를 취소함
                findAnswer.setCheked(false);
                long questionId =findAnswer.getQuestion().getQuestionId();
                Question findQuestion = questionService.findVerifiedQuestion(questionId);

                findQuestion.setChecked(false);                                          // 위와 같은 방식으로 question의 체크를 취소

                boolean allAnswerChecked =findQuestion.getAnswerList().stream()
                        .anyMatch(Answer::isCheked);                                    //question의 모든 질문을 검색해서 질문들의 checked를 확인
                                                                                         // 하나라도 true가 있다면 allAnswerChecked는 true
                if(allAnswerChecked==true){
                    findQuestion.setChecked(true);                                       //따라서 allAnswerChecked가 true 면 question의 checked를 다시 true로 변경
                }
            }
        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {

        return findVerifiedAnswer(answerId);
    }

    //questionId에 해당하는 답변글 모두 조회해서 가져옴
    public Page<Answer> findAnswers(long questionId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("answerId").descending());
        Optional<Page<Answer>> optionalAnswers =answerRepository.findByQuestionQuestionId(questionId,pageable);

        Page<Answer> answerPage = optionalAnswers.orElseThrow(() ->  new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return answerPage;
    }

    public void deleteAnswer(long answerId , long userId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        Question findquestion = questionService.findVerifiedQuestion(findAnswer.getQuestion().getQuestionId());
        if (userId != findAnswer.getUser().getUserId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }

        answerRepository.delete(findAnswer);
        findquestion.getAnswerList().remove(findAnswer);
    }
    //답변이 없는 경우가 있기 때문에 Optional  사용
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

}
