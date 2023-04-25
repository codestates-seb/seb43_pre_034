package com.codestates.stackoverflow.user.controller;

import com.codestates.stackoverflow.dto.MultiResponseDto;
import com.codestates.stackoverflow.dto.SingleResponseDto;
import com.codestates.stackoverflow.security.auth.jwt.JwtTokenizer;
import com.codestates.stackoverflow.user.dto.UserDto;
import com.codestates.stackoverflow.user.entity.User;
import com.codestates.stackoverflow.user.mapper.UserMapper;
import com.codestates.stackoverflow.user.service.UserService;
import com.codestates.stackoverflow.user.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {

    private final static String USER_DEFAULT_URL = "/users";
    private final UserService userService;
    private final UserMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping
    public ResponseEntity join(@Valid @RequestBody UserDto.Post requestBody) {
        User user = mapper.userPostToUser(requestBody);

        User createdUser = userService.createUser(user);
        URI location = UriCreator.createUri(USER_DEFAULT_URL, createdUser.getUserId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/login") // 로그인 폼을 요청하는 메서드
    public String loginForm() {
        return "login";
    }

    /**
     * 세션 방식 로그인 / 로그아웃
     */
//    @PostMapping("/login")
//    public String login(@RequestParam("email") String email,
//                        @RequestParam("password") String password,
//                        HttpSession session, RedirectAttributes redirectAttributes) {
//        if (authenticateUser(email, password)) {
//            session.setAttribute("email", email);
//            String prevUrl = (String) session.getAttribute("prevUrl");
//            return "redirect:" + (prevUrl != null ? prevUrl : "/");
//        } else {
//            redirectAttributes.addAttribute("error", "입력하신 이메일과 비밀번호를 확인해주세요."); // 에러 메세지
//            return "redirect:/login";
//        }
//    }
//
//    private boolean authenticateUser(String username, String password) {
//        // Todo 사용자 인증 로직을 구현
//        return true; // 사용자 인증 로직을 구현해야합니다.
//    }
//
//    @PostMapping("/logout")
//    public String logout(HttpSession session) {
//        session.invalidate();
//        return "redirect:/login";
//    }
    /**
     * JWT 방식 로그아웃(로그인 -> SecurityConfiguration에서 수행)
     */
    @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        String jws = authorizationHeader.substring(7); // "Bearer " 이후의 토큰 문자열 추출

        if (jwtTokenizer.isTokenInBlackList(jws)) {
            return ResponseEntity.badRequest().body("Token has already been invalidated.");
        }

        jwtTokenizer.addToTokenBlacklist(jws); // 블랙리스트에 토큰 추가

        return ResponseEntity.ok().body("Successfully logged out.");
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam(value = "page",defaultValue = "1") int page,
                                   @Positive @RequestParam(value = "size",defaultValue = "15") int size) {
        Page<User> pageUsers = userService.findUsers(page - 1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.usersToUserResponses(users), pageUsers), HttpStatus.OK
        );
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(
            @PathVariable("user-id") @Positive long userId,
            @Valid @RequestBody UserDto.Patch requestBody) {
        requestBody.setUserId(userId);

        User user = userService.updateUser(mapper.userPatchToUser(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user)), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(
            @PathVariable("user-id") @Positive long userId) {
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
