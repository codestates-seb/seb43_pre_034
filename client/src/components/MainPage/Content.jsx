import styled, { css } from "styled-components";

//컴포넌트들
import UpperPart from "./UpperPart";
import DownerPart from "./DonwerPart";
import Questions from "./Question";
import Bottom from "./Bottom";

//React Hook
import useFetchMainPage from "../../hooks/useFetchMainPage";
import { useState, useRef, useCallback } from "react";

//loading
import LoadingSpinner from "../common/Loading";

const ContentPart = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { datas, loading, hasMore, dataAmount } = useFetchMainPage(pageNumber);
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
    <>
      {loading ? (
        <SpinnerWrap>
          <LoadingSpinner />
        </SpinnerWrap>
      ) : (
        <Content>
          <CotentHead>
            <UpperPart />
            <DownerPart dataAmount={dataAmount} />
          </CotentHead>
          <ContentBody>
            {datas.map((el, index) => {
              if (datas.length === index + 1) {
                return (
                  <Questions ref={lastDataElementRef} key={index} data={el} />
                );
              } else {
                return <Questions key={index} data={el} />;
              }
            })}
            <Bottom />
          </ContentBody>
        </Content>
      )}
    </>
  );
};

const Content = styled.div`
  flex: 0 1 802px;
  box-sizing: border-box;
  border: 1px solid hsl(210, 8%, 85%);
  border-left-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
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
const SpinnerWrap = styled.div`
  flex: 0 1 802px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ContentPart;
