import { SET_CURRENT_ROUTE } from '@/actions/routeStore';
export function route(state = 'home', action) {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return action.route;
    default:
      return state;
  }
}
