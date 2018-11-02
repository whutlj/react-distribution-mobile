import { combineReducers } from 'redux';
import { SET_CURRENT_ROUTE } from '@/actions/routeStore';
function route(state = 'home', action) {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return action.route;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  route
});

export default rootReducer;