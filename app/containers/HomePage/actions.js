import axios from 'axios';

import {
  OPENTABLE_API_URL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
} from './constants';

export function getCitiesSuccess(data) {
  return {
    type: GET_CITIES_SUCCESS,
    data,
  };
}

export function getCitiesError(data) {
  return {
    type: GET_CITIES_FAILURE,
    data,
  };
}

export function getCities() {
  const url = `${OPENTABLE_API_URL}/cities`;

  return async function (dispatch) { // eslint-disable-line func-names
    try {
      const response = await axios.get(url);
      dispatch(getCitiesSuccess(response.data.cities));
    } catch (error) {
      dispatch(getCitiesError(error));
    }
  };
}
