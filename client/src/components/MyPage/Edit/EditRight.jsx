import styled from "styled-components";

//icons
// import { CgProfile } from "react-icons/cg";
import { ButtonCompo } from "../../common/Buttons";
import { useNavigate } from "react-router-dom";
//react hooks
import { useState } from "react";
import axios from "axios";

import { MY_PAGE_URL_PATH } from "../../../constants/constant";
import person from "../../../assets/images/person.png";

function EditRight({ name }) {
  //useParams를 사용해도 될 수도 더블 체크 해야 한다.
  const userId = localStorage.getItem("userId");
  const [inputValue, setInputValue] = useState(name);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //서버에 PATCH로 보내기 useParam을 사용해서 id number를 가져와야 한다.(현재는 일단 고정된 형태!)
    axios
      .patch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
        userId: userId,
        name: inputValue,
        status: "MEMBER_SLEEP",
      })
      .then(() => {
        console.log("Post submitted successfully");
        navigate(MY_PAGE_URL_PATH.USERS_PROFILE);
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });
  };
  return (
    <EditSection>
      <div className="edit-sec">Edit your profile</div>
      <div className="line-between"></div>
      <div className="public-info">
        Public information
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <div className="profile-img">
              <img src={person} alt="person" />
            </div>
            <div className="feature">Display name</div>
            <input
              className="edit-name"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
          </div>
          <ButtonCompo type="submit">Save Profile</ButtonCompo>
        </form>
      </div>
    </EditSection>
  );
}

const EditSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  /* border: 1px solid black; */
  .edit-sec {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .line-between {
    border-top: 1px solid black;
    margin-bottom: 2rem;
  }
  .profile-img {
    margin-top: 2rem;
    img {
      width: 7rem;
      margin: 1rem;
    }
  }
  .wrapper {
    margin-top: 1.8rem;
    border: 0.2px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .confirm-btn {
    margin-top: 1rem;
  }
  .feature {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem auto;
  }
`;

// const UserImg = styled(CgProfile)`
//   font-size: 7rem;
// `;

export default EditRight;
