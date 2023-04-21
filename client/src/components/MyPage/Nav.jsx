import styled from "styled-components";
import { MyPageNavBtn } from "../common/Buttons";
//버튼을 추가로 작성하고, common 하나 만들어서 사용해도 될듯?
//그리고 map으로 돌려도 되지 않을까??
function Nav() {
  const navList = ["Activity", "Saves", "Settings"];
  return (
    <Wrapper>
      <ProfileBtn>Profile</ProfileBtn>
      {navList.map((el, idx) => {
        return <MyPageNavBtn key={idx}>{el}</MyPageNavBtn>;
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
