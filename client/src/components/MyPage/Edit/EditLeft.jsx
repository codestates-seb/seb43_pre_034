import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MY_PAGE_URL_PATH } from "../../../constants/constant";

function EditLeft() {
  return (
    <PersonalInfo>
      <div className="title">PERSONAL INFORMATION</div>
      <LinkStyle to={MY_PAGE_URL_PATH.USERS_PROFILE_EDIT}>
        <Edit className="edit-profile">Edit profile</Edit>
      </LinkStyle>
      <LinkStyle to={MY_PAGE_URL_PATH.USERS_PROFILE_DELETE}>
        <Delete className="delete-profile">Delete profile</Delete>
      </LinkStyle>
    </PersonalInfo>
  );
}

const PersonalInfo = styled.section`
  /* border: 1px solid black; */
  .title {
    font-size: 0.9rem;
    font-weight: 800;
    margin-bottom: 0.6rem;
  }
`;

const CommonStyle = css`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  border-radius: 8px;
  height: 3vh;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
`;

const Edit = styled.div`
  ${CommonStyle}
  background-color: orange;
  color: white;
`;

const Delete = styled.div`
  ${CommonStyle}
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default EditLeft;
