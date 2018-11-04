import { SET_USER_INFO } from '@/actions/user'
export default function user(state = null, action) {
  switch(action.type) {
    case SET_USER_INFO:
      return action.user;
    default:
      return state;
  }
}