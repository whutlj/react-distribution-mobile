export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';

const setCurrentRoute = function(route) {
  return {
    type: SET_CURRENT_ROUTE,
    route
  };
};

export { setCurrentRoute };
