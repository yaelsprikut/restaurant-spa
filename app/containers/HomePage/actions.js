/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  OPENTABLE_API_URL,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
} from './constants';

import axios from 'axios';
import store from '../../configureStore';


export function getCitiesSuccess(data) {
  console.log("getCitiesSuccess???")
  return {
    type: GET_CITIES_SUCCESS,
    data
  };
}

export function getCitiesError(data) {
  return {
    type: GET_CITIES_FAILURE,
    data
  };
}

export function getCities() {
    let url = `${OPENTABLE_API_URL}/cities`;

    return async function(dispatch) {
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatch(getCitiesSuccess(response.data.cities))
      } catch (error) {
        dispatch(getCitiesError(error));
      }
    }
}