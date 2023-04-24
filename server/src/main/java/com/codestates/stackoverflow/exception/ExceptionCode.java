package com.codestates.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "회원을 찾을 수 없습니다."),
    USER_EXISTS(409, "회원이 존재합니다."),
    NOT_IMPLEMENTATION(501, "구현되지 않았습니다."),
    INVALID_USER_STATUS(400, "권한이 없는 회원 상태입니다."),
    NO_PERMISSION_EDITING_POST(403,"작성자만 수정할 수 있습니다."),
    NO_PERMISSION_DELETING_POST(403,"작성자만 삭제할 수 있습니다."),
    QUESTION_NOT_FOUND(404,"질문을 찾을 수 없습니다."),
    QUESTION_COMMENT_NOT_FOUND(404,"질문 댓글을 찾을 수 없습니다."),
    NO_PERMISSION_CREATING_POST(403, "회원만 작성 할 수 있습니다."),
    ANSWER_NOT_FOUND(403, "답변을 찾을 수 없습니다."),
    ANSWER_COMMENT_NOT_FOUND(403,"답변 댓글을 찾을 수 없습니다"),
    ANSWER_VOTE_NOT_FOUND(403, "답변 추천을 찾을 수 없습니다."),
    ANSWER_VOTE_EXIST(409, "추천이 존재합니다.") ,
    QUESTION_VOTE_NOT_FOUND(403, "질문 추천을 찾을 수 없습니다") ,
    QUESTION_VOTE_EXIST(409, "질문 추천이 존재합니다.") ,
    INVALID_PATH(404, "경로가 적합하지 않습니다");


    @Getter
    private int status;

    @Getter
    private String message;
    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
