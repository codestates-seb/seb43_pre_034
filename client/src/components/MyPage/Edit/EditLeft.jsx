import React from "react";
import styled, { css } from "styled-components";

function EditLeft() {
  return (
    <PersonalInfo>
      <div className="title">PERSONAL INFORMATION</div>
      <Edit className="edit-profile">Edit profile</Edit>
      <Delete className="delete-profile">Delete profile</Delete>
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

export default EditLeft;
