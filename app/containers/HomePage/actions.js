import axios from 'axios';

import {
  OPENTABLE_API_URL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
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

  return async function (dispatch) {
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
  // get all restaurants for all selected cities
  return async function (dispatch) {
    try {
      const url = `${OPENTABLE_API_URL}/restaurants?city=${city}`;
      const response = await axios.get(url);
      const data = response.data.restaurants;

      const restaurantList = [];
      Object.keys(data).map(function (key) { // eslint-disable-line prefer-arrow-callback
        return restaurantList.push({
          name: data[key].name,
          address: data[key].address,
          area: data[key].area,
          city: data[key].city,
          price: data[key].price,
          country: data[key].country,
        });
      });
      return dispatch(getRestaurantsForCitySuccess(restaurantList));
    } catch (error) {
      return dispatch(getRestaurantsForCityError(error));
    }
  };
}
