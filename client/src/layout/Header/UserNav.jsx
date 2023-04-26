import styled from "styled-components";
import person from "../../assets/images/person.png";
//redux
import { useDispatch } from "react-redux";
import { loginVerified } from "../../redux/slice/loginState";

const UserNavContainer = styled.div`
  display: flex;
  padding-left: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;

  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }

  .logout_btn {
    font-size: 13px;
    color: #525960;
    border: none;
    background: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 20px;

    &:hover,
    &:active {
      background-color: #e9eaec;
    }
  }
`;

const UserNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginVerified());
  };
  return (
    <UserNavContainer>
      <img src={person} alt="person" />
      <button className="logout_btn" onClick={handleLogout}>
        logout
      </button>
    </UserNavContainer>
  );
};

export default UserNav;
