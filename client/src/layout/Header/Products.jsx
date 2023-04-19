import styled from "styled-components";

const ProductsContainer = styled.ol`
  flex: 0 0 250px;
  display: flex;
  height: 33px;
  color: #525960;
  font-size: 13px;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .li_nav {
    flex: 0 0 calc(100% / 3rem);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      background-color: #e9eaec;
      border-radius: 20px;
    }
  }
  .procuts_active {
    &:active {
      background-color: #f48225;
      color: #fff;
    }
  }
  .is_display {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex: 0 0 78px;
    padding: 0;

    .li_nav {
      flex: 0 0 1;
    }
    .is_display {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    flex: 1 0 47px;
    padding: 0;
    font-size: 11px;

    .is_display {
      display: none;
    }
  }
`;

const Products = () => {
  return (
    <ProductsContainer>
      <li className="li_nav is_display">About</li>
      <li className="li_nav procuts_active">Products</li>
      <li className="li_nav is_display">For Teams</li>
    </ProductsContainer>
  );
};

export default Products;
