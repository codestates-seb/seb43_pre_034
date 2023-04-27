import styled, { css } from "styled-components";
// import { CgProfile } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MY_PAGE_URL_PATH } from "../../constants/constant";
import useFetchPorfile from "../../hooks/useFetchPorfile";

import person from "../../assets/images/person.png";

function Profile() {
  const { name, createdAt } = useFetchPorfile();
  const dateString = createdAt;
  const date = new Date(dateString);
  const timePassed = new Date().getTime() - date.getTime();
  const daysPassed = Math.floor(timePassed / (1000 * 60 * 60 * 24));
  const yearsPassed = Math.floor(daysPassed / 365);
  const monthsPassed = Math.floor((daysPassed % 365) / 30);
  return (
    <UserProfile>
      <div className="img">
        <img src={person} alt="person" />
      </div>
      <div className="info">
        <div className="username">{name}</div>
        <ul className="user-log">
          <li className="info-log">
            <SignUpdate />
            Member for {yearsPassed} years, {monthsPassed} months
          </li>
          <li className="info-log">
            <LoginLog />
            Last Seen this week
          </li>
          <li className="info-log">
            <Calender />
            Visited 13 days, 8 consecutive
          </li>
        </ul>
      </div>
      <Link to={MY_PAGE_URL_PATH.USERS_PROFILE_EDIT}>
        <EditProfileBtn>
          <PenIcon />
          Edit Profile
        </EditProfileBtn>
      </Link>
    </UserProfile>
  );
}

const UserProfile = styled.section`
  flex: 0 1 100%;
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  align-items: left;
  .img {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 7rem;
      margin: 1rem;
      border-radius: 50%;
      @media ${(props) => props.theme.breakpoints.tabletMax} {
        font-size: 5rem;
        margin: 0;
      }
      @media ${(props) => props.theme.breakpoints.mobileMax} {
        font-size: 3rem;
      }
    }
    /* width: 25%;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
  .info {
    flex: 0 1 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .username {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
  .user-log {
    display: flex;
    flex-wrap: wrap;
  }
  .info-log {
    margin-right: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
  }
`;

// const ProfilePic = styled(CgProfile)`
//   font-size: 7rem;
//   margin: 1rem;
//   @media ${(props) => props.theme.breakpoints.tabletMax} {
//     font-size: 5rem;
//     margin: 0;
//   }
//   @media ${(props) => props.theme.breakpoints.mobileMax} {
//     font-size: 3rem;
//   }
// `;

const CommonStyleIcons = css`
  font-size: 1rem;
  margin-right: 0.3rem;
`;

const SignUpdate = styled(FaBirthdayCake)`
  ${CommonStyleIcons}
`;
const LoginLog = styled(AiOutlineClockCircle)`
  ${CommonStyleIcons}
`;

const Calender = styled(SlCalender)`
  ${CommonStyleIcons}
`;
const EditProfileBtn = styled.button`
  position: fixed !important;
  right: 10rem;
  border-radius: 5px;
  background-color: transparent;
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    top: 5rem;
  }
`;
const PenIcon = styled(BsFillPencilFill)`
  font-size: 1rem;
  margin-right: 5px;
`;

export default Profile;
