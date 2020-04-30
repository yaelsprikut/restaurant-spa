import axios from 'axios';

import {
  OPENTABLE_API_URL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE
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

export function getRestaurantsForCitySuccess(data) {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    data,
  };
}

export function getRestaurantsForCityError(data) {
  return {
    type: GET_RESTAURANTS_FAILURE,
    data,
  };
}

export function getRestaurantsForCity(city) {
  const url = `${OPENTABLE_API_URL}/restaurants?city=${city}`;

  return async function (dispatch) { // eslint-disable-line func-names
    try {
      const response = await axios.get(url);
      const data = response.data.restaurants;
      let restaurantList = [];
      Object.keys(data).map(function(key) {
        restaurantList.push({
          "name": data[key].name,
          "address": data[key].address,
          "area": data[key].area
        })
      });
      dispatch(getRestaurantsForCitySuccess(restaurantList));
    } catch (error) {
      dispatch(getRestaurantsForCityError(error));
    }
  };
}
