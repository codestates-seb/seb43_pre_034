package com.codestates.stackoverflow.user.helper;

import com.codestates.stackoverflow.user.entity.User;
import lombok.Getter;

@Getter
public class MemberRegistrationApplicationEvent {

    private User user;

    public MemberRegistrationApplicationEvent(User user) {
        this.user = user;
    }
}
