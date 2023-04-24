package com.codestates.stackoverflow.user.helper;

import com.codestates.stackoverflow.user.entity.User;
import com.codestates.stackoverflow.user.helper.email.EmailSender;
import com.codestates.stackoverflow.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.mail.MailSendException;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Slf4j
@EnableAsync
@Component
@RequiredArgsConstructor
public class MemberRegistrationEventListener {
    private final EmailSender emailSender;
    private final UserService userService;

    @Async
    @EventListener
    public void listen(MemberRegistrationApplicationEvent event) throws Exception {
        try {
            // 전송할 메시지를 생성했다고 가정.
            String message = "any email message";
            emailSender.sendEmail(message);
        } catch (MailSendException e) {
            e.printStackTrace();
            log.error("MailSendException: rollback for Member Registration:");
            User user = event.getUser();
            userService.deleteUser(user.getUserId());
        }
    }
}
