import styled from "styled-components";
import person from "../../assets/images/person.png";
import { useNavigate } from "react-router";
import { MY_PAGE_URL_PATH } from "../../constants/constant";

//redux
import { persistor } from "../../index";

//aixos
import axios from "axios";

const UserNavContainer = styled.div`
  display: flex;
  padding-left: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;

  .profile_btn {
    border: none;
    background: #fff;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
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
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handlerLogout = async () => {
    await persistor.purge();
    localStorage.removeItem("userId");
    axios.defaults.headers.common["Authorization"] = "";
    navigate("/");
  };

  const handlerProfile = () => {
    navigate(`${MY_PAGE_URL_PATH.USERS_PROFILE}`);
  };

  return (
    <UserNavContainer>
      <button className="profile_btn" onClick={handlerProfile}>
        <img src={person} alt="person" />
      </button>
      <button className="logout_btn" onClick={handlerLogout}>
        logout
      </button>
    </UserNavContainer>
  );
};

export default UserNav;
