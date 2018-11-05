export const SET_USER_INFO = 'SET_USER_INFO'; 
export const GET_USER_INFO = 'GET_USER_INFO';
export const SET_USER_STATUS = 'SET_USER_STATUS';
export const UPDATA_USER_STATUS = 'UPDATA_USER_STATUS';
// export function setUserInfo(user) {
//   return {
//     type: SET_USER_INFO,
//     user: user
//   }
// }

export function getUserInfo() {
  return {
    type: GET_USER_INFO
  }
}

export function setUserStatus() {
  return {
    type: SET_USER_STATUS,
    status: true
  }
}
