import styled from "styled-components";

const NavContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 100%;
  width: 200px;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.06) 0px 2px 6px,
    rgba(0, 0, 0, 0.09) 0px 3px 8px;

  ol {
    list-style: none;
  }

  li {
    margin: 6px;
    padding: 6px;
    text-align: left;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #e9eaec;
    }
    .product_title {
      margin-bottom: 4px;
      font-size: 13px;
      color: black;
    }
    .product_content {
      max-width: 100%;
      line-height: 16px;
      font-size: 12px;
      color: rgb(106, 115, 124);
      white-space: normal;
    }
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex: 0 0 1;
  }
`;

const ProductsNav = () => {
  return (
    <NavContainer>
      <ol>
        <li>
          <div className="product_title">Stack Overflow</div>
          <div className="product_content">Public questions & answers</div>
        </li>
        <li>
          <div className="product_title">Stack Overflow</div>
          <div className="product_content">
            where developers & technologists share private Knowledge with
            coworkers
          </div>
        </li>
        <li>
          <div className="product_title">Talent</div>
          <div className="product_content">Build your employer brand</div>
        </li>
        <li>
          <div className="product_title">Advertising</div>
          <div className="product_content">
            Reach developers & technologists worldwide
          </div>
        </li>
      </ol>
    </NavContainer>
  );
};

export default ProductsNav;
