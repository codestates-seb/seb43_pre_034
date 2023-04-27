import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsStackOverflow } from "react-icons/bs";
// sidebar 스타일
const SideBarCompo = styled.section`
  ul {
    width: ${(props) => props.theme.widthSize.sidebar};
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      width: 100%;
    }
  }
  margin: 20px 0 0 20px;
  background-color: hsl(
    47.272727272727266,
    89.18918918918922%,
    92.74509803921569%
  );
  font-size: 20px;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
    margin-left: 0px;
  }
  border: 1px solid #f1e5bc;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  p {
    background-color: hsl(47, 83%, 91%);
    font-size: 12px;
    font-weight: 700;
    padding: 12px 15px;
    color: #525960;
    border-top: 1px solid #f1e5bc;
    border-bottom: 1px solid #f1e5bc;
  }
  li {
    padding: 0 16px;
    margin: 12px 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .sidebar_icons {
    font-size: 14px;
    margin-right: 10px;
    :first-of-type {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    padding-left: 3px;
    color: #3b4045;
    vertical-align: baseline;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      width: 100%;
    }
  }
`;

// 메인페이지 + 상세페이지 사이드바
const SideBar = () => {
  return (
    <SideBarCompo>
      <ul>
        <p>The Overflow Blog</p>
        <li>
          <HiPencil className="sidebar_icons" />
          <span>Community is the future of AI</span>
        </li>
        <li>
          <HiPencil size={20} className="sidebar_icons" />
          <span>The philosopher who believes in Web Assembly</span>
        </li>
        <p>Featured on Meta</p>
        <li>
          <BsStackOverflow size={30} className="sidebar_icons" />
          <span>
            Content Discovery initiative 4/13 update: Related questions using a
            Machine...
          </span>
        </li>
        <li>
          <BsStackOverflow className="sidebar_icons" />
          <span>The [protection] tag is being burninated</span>
        </li>
        <li>
          <BsStackOverflow className="sidebar_icons" />
          <span>Temporary policy: ChatGPT is banned</span>
        </li>
      </ul>
    </SideBarCompo>
  );
};

const SideBarEditCompo = styled.section`
  position: sticky;
  top: 50px;
  ul {
    list-style: inside;
    width: 363px;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      width: 100%;
    }
  }

  background-color: hsl(
    47.272727272727266,
    89.18918918918922%,
    92.74509803921569%
  );
  font-size: 20px;
  margin-left: 20px;
  border: 1px solid #f1e5bc;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  p {
    background-color: hsl(47, 83%, 91%);
    font-size: 12px;
    font-weight: 700;
    padding: 12px 15px;
    color: #525960;
    border-top: 1px solid #f1e5bc;
    border-bottom: 1px solid #f1e5bc;
  }
  li {
    padding: 4px 15px;
    font-size: 14px;
    margin: 12px 0;
  }
`;
// 수정페이지 사이드바
const SideBarEdit = () => {
  return (
    <SideBarEditCompo>
      <ul>
        <p>How to Edit</p>
        <li>Correct minor typos or mistakes</li>
        <li>Clarify meaning without changing it</li>
        <li>Add related resources or links</li>
        <li>Always respect the author’s intent</li>
        <li>Don’t use edits to reply to the author</li>
      </ul>
    </SideBarEditCompo>
  );
};
export { SideBar, SideBarEdit };
