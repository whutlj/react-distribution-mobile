import { SET_USER_INFO, UPDATA_USER_STATUS } from '@/actions/user'
export function user(state = null, action) {
  switch(action.type) {
    case SET_USER_INFO:
      return action.user;
    default:
      return state;
  }
}

export function status(state = false, action) {
  switch(action.type) {
    case UPDATA_USER_STATUS:
      return action.status;
    default:
      return state;
  }
}