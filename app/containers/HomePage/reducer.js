import { GET_CITIES_SUCCESS, GET_RESTAURANTS_SUCCESS } from './constants';

// The initial state of the App
const initialState = {
  city: null,
  restaurants: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        city: action.data,
      };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.data,
      };
    default:
      return state;
  }
}

export default homeReducer;
