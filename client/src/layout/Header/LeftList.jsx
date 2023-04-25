import styled from "styled-components";
import { useState } from "react";
import ProductsNav from "./ProductsNav";

const LeftListContainer = styled.div`
  flex: 0 1 250px;
  display: flex;
  height: 33px;
  gap: 1rem;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .is_display {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    .is_display {
      display: none;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    padding: 0;
    font-size: 11px;

    .is_display {
      display: none;
    }
  }
`;

const BtnNav = styled.button`
  font-size: 13px;
  color: #525960;
  border: none;
  background: none;
  flex: 0 0 calc(100% / 3rem);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  border-radius: 20px;

  &:hover {
    background-color: #e9eaec;
  }
  &:focus,
  &:active {
    background-color: #f48225;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex: 0 0 1;
  }
`;

const LeftList = ({ isLogin }) => {
  const [isProducts, setIsProcuts] = useState(false);

  return (
    <LeftListContainer>
      {isLogin ? (
        <BtnNav
          onClick={() => {
            setIsProcuts(!isProducts);
          }}
        >
          Products
        </BtnNav>
      ) : (
        <>
          <BtnNav className="is_display">About</BtnNav>
          <BtnNav
            onClick={() => {
              setIsProcuts(!isProducts);
            }}
          >
            Products
          </BtnNav>
          <BtnNav className="is_display">For Teams</BtnNav>
        </>
      )}
      {isProducts ? <ProductsNav /> : null}
    </LeftListContainer>
  );
};

export default LeftList;
