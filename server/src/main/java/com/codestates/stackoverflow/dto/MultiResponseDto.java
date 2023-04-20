package com.codestates.stackoverflow.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;


@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private PageDto pageInfo;

    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageDto(data,page);
    }
}
