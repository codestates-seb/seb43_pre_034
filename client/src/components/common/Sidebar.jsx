import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsStackOverflow } from "react-icons/bs";
// sidebar 공통 스타일
const SideBarCompo = styled.div`
  width: ${(props) => props.theme.widthSize.sidebar};
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: none;
  }
`;

// 메인페이지 + 상세페이지 사이드바
const SideBar = () => {
  return (
    <SideBarCompo>
      <p>The Overflow Blog</p>
      <ul>
        <li>
          <HiPencil />
          Community is the future of AI
        </li>
        <li>
          <HiPencil />
          The philosopher who believes in Web Assembly
        </li>
      </ul>
      <p>Featured on Meta</p>
      <ul>
        <li>
          <BsStackOverflow />
          Content Discovery initiative 4/13 update: Related questions using a
          Machine...
        </li>
      </ul>
    </SideBarCompo>
  );
};

// 수정페이지 사이드바
const SideBarEdit = () => {
  return <SideBarCompo></SideBarCompo>;
};
export { SideBar, SideBarEdit };
