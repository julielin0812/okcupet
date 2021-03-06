import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _currentUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _currentUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    default:
      return state;
  }

};

export default SessionReducer;
