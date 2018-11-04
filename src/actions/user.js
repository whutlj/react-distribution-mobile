export const SET_USER_INFO = 'SET_USER_INFO'; 
export const GET_USER_INFO = 'GET_USER_INFO';
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
