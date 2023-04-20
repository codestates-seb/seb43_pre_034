import styled, { css } from "styled-components";
import UpperPart from "./UpperPart";
import DownerPart from "./DonwerPart";
import Questions from "./Question";
import useFetchMainPage from "../../hooks/useFetchMainPage";
import { useState, useRef, useCallback } from "react";
const ContentPart = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, hasMore, error } = useFetchMainPage(query, pageNumber);
  const observer = useRef();
  const lastDataElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prePageNumber) => prePageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  return (
    <Content>
      <CotentHead>
        <UpperPart />
        <DownerPart />
      </CotentHead>
      <ContentBody>
        <input type="text" onChange={handleSearch}></input>
        {data.map((data, index) => {
          if (data.length === index + 1) {
            return (
              <Questions ref={lastDataElementRef} key={data} data={data} />
            );
          } else {
            return <Questions key={data} data={data} />;
          }
        })}
        {error && "...Error"}
        {loading && "...isLoading"}
      </ContentBody>
    </Content>
  );
};

const Content = styled.div`
  flex: 0 1 802px;
  box-sizing: border-box;
  /* overflow: hidden; */
`;

const CommonStyle = css`
  width: 100%;
  box-sizing: border-box;
`;

const CotentHead = styled.div`
  ${CommonStyle}
  margin-bottom: 1rem;
`;
const ContentBody = styled.div`
  ${CommonStyle}/* height: 100vh; */
`;

export default ContentPart;