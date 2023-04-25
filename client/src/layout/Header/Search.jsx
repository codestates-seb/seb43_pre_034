import styled from "styled-components";
import { ReactComponent as SearchSvg } from "../../assets/images/search.svg";
import { useState } from "react";

const SearchContainer = styled.div`
  width: 400%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;

  .is_display {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    justify-content: flex-end;
    position: none;
    margin-right: 7px;
    svg {
      width: 25px;
      height: 25px;
    }
    .is_display {
      display: block;
      cursor: pointer;
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

const SearchInputNav = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20px;
  width: 100%;
  max-width: 720px;
  min-width: 420px;
  z-index: 2000;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    min-width: 353px;
    inset: 0px auto auto 0px;
    top: -10px;
    left: 0;
    right: 0;
    margin: 0px;
    transform: translate3d(0px, 30px, 0px);
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    min-width: 210px;
    left: -31%;
    width: 171%;
  }
`;

const SearchTextDiv = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  ol {
    display: block;
    list-style: none;
  }
  .text_width {
    flex: 50%;
    li {
      font-size: 13px;
      height: 24px;
    }
    .li_title {
      color: #000;
      padding-right: 0.5rem;
      font-style: ui-monospace;
    }
    .li_desc {
      color: #6a737c;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    flex-direction: column;
  }
`;

const Search = () => {
  const [search, setSearch] = useState("");
  const [isSearchClick, setIsSearchClick] = useState(false);

  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          className="is_input"
          placeholder="Search..."
          value={search}
          onFocus={() => setIsSearchClick(true)}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchSvg
          className="is_display"
          onClick={() => {
            setIsSearchClick(!isSearchClick);
          }}
        />
        {isSearchClick ? (
          <SearchInputNav>
            <SearchTextDiv>
              <ol className="text_width">
                <li>
                  <span className="li_title">[tag]</span>
                  <span className="li_desc">search within a tag</span>
                </li>
                <li>
                  <span className="li_title">user:1234</span>
                  <span className="li_desc">serch by author</span>
                </li>
                <li>
                  <span className="li_title">&quot;words here&quot;</span>
                  <span className="li_desc">exact phrase</span>
                </li>
                <li>
                  <span className="li_title">collective:&quot;Name&quot;</span>
                  <span className="li_desc">&nbsp;collective content</span>
                </li>
              </ol>
              <ol className="text_width">
                <li>
                  <span className="li_title">answers:0</span>
                  <span className="li_desc">unanswered questions</span>
                </li>
                <li>
                  <span className="li_title">score:3</span>
                  <span className="li_desc">post with a 3+ score</span>
                </li>
                <li>
                  <span className="li_title">is:question</span>
                  <span className="li_desc">type of post</span>
                </li>
                <li>
                  <span className="li_title">isaccepted:yes</span>
                  <span className="li_desc">&nbsp;search within status</span>
                </li>
              </ol>
            </SearchTextDiv>
          </SearchInputNav>
        ) : null}
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
