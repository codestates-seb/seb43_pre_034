package com.codestates.stackoverflow.user.helper.email;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfiguration {
    @Bean
    public EmailSendable emailSendable() {
        return new MockEmailSendable();
    }
}
