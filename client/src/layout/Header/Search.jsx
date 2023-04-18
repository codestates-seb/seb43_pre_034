import styled from "styled-components";
import { ReactComponent as SearchSvg } from "../../assets/images/search.svg";

const SearchContainer = styled.div`
  flex: 0 1 705px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .is_display {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    flex: 0 0 40px;

    svg {
      width: 25px;
      height: 25px;
    }
    .is_display {
      display: block;
    }
  }
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='none' viewBox='-8 0 30 25' stroke-width='2.5' stroke='gray' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center left;
  padding-left: 2rem;
  border-radius: 3px;
  border: 1px solid #babfc4;

  &:focus {
    outline: none !important;
    text-align: left;

    border: 1px solid #7aa7c7;
    box-shadow: 0 0 2px 4px #cbe4f6;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    display: none;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." />
      <SearchSvg className="is_display" />
    </SearchContainer>
  );
};

export default Search;
