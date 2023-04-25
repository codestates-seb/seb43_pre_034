import styled, { css } from "styled-components";
import UpperPart from "./UpperPart";
import DownerPart from "./DonwerPart";
import Questions from "./Question";
import useFetchMainPage from "../../hooks/useFetchMainPage";
import { useState, useRef, useCallback } from "react";

const ContentPart = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { datas, loading, hasMore } = useFetchMainPage(pageNumber);
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

  return (
    <Content>
      <CotentHead>
        <UpperPart />
        <DownerPart data={datas} />
      </CotentHead>
      <ContentBody>
        {datas.map((el, index) => {
          if (datas.length === index + 1) {
            return <Questions ref={lastDataElementRef} key={index} data={el} />;
          } else {
            return <Questions key={index} data={el} />;
          }
        })}
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
