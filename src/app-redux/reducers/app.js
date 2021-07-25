import { SET_NOTIFICATION } from "config/constants";

const initState = {
  loading: false,
  notifications: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      const notfs = state.notifications.slice();

      notfs.unshift(action.payload);
      return {
        ...state,
        notifications: notfs,
      };
    default:
      return state;
  }
};

export default appReducer;
