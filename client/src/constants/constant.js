//userId 정보 가져오기
const userId = localStorage.getItem("userId");

const MY_PAGE_URL_PATH = {
  USERS_PROFILE: `/users/${userId}/info`,
  USERS_PROFILE_EDIT: `/users/${userId}/info/edit`,
  USERS_PROFILE_DELETE: `/users/${userId}/info/delete`,
};

export { MY_PAGE_URL_PATH };
