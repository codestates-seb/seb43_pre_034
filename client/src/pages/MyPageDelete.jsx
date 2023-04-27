import styled from "styled-components";
import Profile from "../components/MyPage/Profile";
import Nav from "../components/MyPage/Nav";
import axios from "axios";

//redux
import { useDispatch } from "react-redux";
import { loginVerified } from "../redux/slice/loginState";

import { useNavigate } from "react-router-dom";

function MyPageDelete() {
  const selectedNav = "Settings";
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/${userId}`)
      .then((res) => {
        alert("delete the user");
        dispatch(loginVerified());
        localStorage.removeItem("userId");
        axios.defaults.headers.common["Authorization"] = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Profile />
      <Nav selectedNav={selectedNav} />
      <DeletePro>
        Are you sure?
        <button onClick={handleDelete}>Yes</button>
      </DeletePro>
    </Container>
  );
}
const Container = styled.main`
  max-width: 1100px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;
  padding: 1rem;
  border-left: 1px solid black;
`;
const DeletePro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    margin-top: 1rem;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: red;
  }
`;
export default MyPageDelete;
