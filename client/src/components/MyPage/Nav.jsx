import styled from "styled-components";
import { MyPageNavBtn } from "../common/Buttons";
import { MY_PAGE_URL_PATH } from "../../constants/constant";
import { Link } from "react-router-dom";
//마이 페이지 Nav 버튼들
function Nav({ selectedNav }) {
  const navList = ["Profile", "Activity", "Saves", "Settings"];
  //객체를 사용해서 처리를 할 수도 있지 않을까??
  //다양한 접근이 가능해보인다.
  const navLinks = {
    Profile: MY_PAGE_URL_PATH.USERS_PROFILE,
    Settings: MY_PAGE_URL_PATH.USERS_PROFILE_EDIT,
  };
  return (
    <Wrapper>
      {navList.map((section, idx) => {
        if (section === selectedNav) {
          return (
            <Link to={navLinks[section]} key={idx}>
              <ProfileBtn>{selectedNav}</ProfileBtn>
            </Link>
          );
        }
        return <MyPageNavBtn key={idx}>{section}</MyPageNavBtn>;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: 1rem;
`;
const ProfileBtn = styled.button`
  background: orange;
  color: white;
  border-radius: 2rem;
  border: none;
  padding: 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
export default Nav;
