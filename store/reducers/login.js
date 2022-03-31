import {LOGIN} from '../actions/login';

const initialState = {
  accessToken : null
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};
