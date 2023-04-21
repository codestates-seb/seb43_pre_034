import styled, { css } from "styled-components";
import { CgProfile } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BsFillPencilFill } from "react-icons/bs";

function Profile() {
  return (
    <UserProfile>
      <div className="img">
        <ProfilePic className="profile-icon" />
      </div>
      <div className="info">
        <div className="username">hoinleekk</div>
        <ul className="user-log">
          <li className="info-log">
            <SignUpdate />
            Member for 2 years, 3 months
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
      <EditProfileBtn>
        <PenIcon />
        Edit Profile
      </EditProfileBtn>
    </UserProfile>
  );
}

const UserProfile = styled.section`
  flex: 0 1 100%;
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  /* min-height: 30vh; */
  position: relative;
  margin-bottom: 1rem;
  align-items: left;
  .img {
    width: 25%;
    /* flex: 0 1 25%; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
  }
  .info {
    /* width: 100%; */
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

const ProfilePic = styled(CgProfile)`
  font-size: 7rem;
  margin: 1rem;
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    font-size: 5rem;
    margin: 0;
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    font-size: 3rem;
  }
`;

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
  position: absolute;
  right: 2rem;
  border-radius: 5px;
  background-color: transparent;
`;
const PenIcon = styled(BsFillPencilFill)`
  font-size: 1rem;
  margin-right: 5px;
`;

export default Profile;
