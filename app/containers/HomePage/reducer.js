import { GET_CITIES_SUCCESS } from './constants';

// The initial state of the App
const initialState = {
  city: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES_SUCCESS:
      // Delete prefixed '@' from the github username
      return {
        ...state,
        city: action.data,
      };
    default:
      return state;
  }
}

export default homeReducer;
