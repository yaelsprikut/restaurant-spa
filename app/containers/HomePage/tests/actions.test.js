import {
  GET_CITIES_SUCCESS, GET_CITIES_FAILURE, GET_RESTAURANTS_SUCCESS, GET_RESTAURANTS_FAILURE
} from '../constants';

import {
  getCities, getCitiesSuccess, getCitiesError, getRestaurantsForCity, getRestaurantsForCitySuccess, getRestaurantsForCityError
} from '../actions';

describe('Home Actions', () => {
  describe('getRestaurantsForCitySuccess', () => {
    it('should return the correct type and the passed restaurant data', () => {
      const fixture = {};
      const expectedResult = {
        type: GET_RESTAURANTS_SUCCESS,
        data: fixture,
      };

      expect(getRestaurantsForCitySuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getRestaurantsForCityError', () => {
    it('should return the correct type and the passed restaurant data', () => {
      const fixture = {};
      const expectedResult = {
        type: GET_RESTAURANTS_FAILURE,
        data: fixture,
      };

      expect(getRestaurantsForCityError(fixture)).toEqual(expectedResult);
    });
  });

  describe('getCitiesSuccess', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = {
        type: GET_CITIES_SUCCESS,
        data: fixture,
      };

      expect(getCitiesSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getCitiesError', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = {
        type: GET_CITIES_FAILURE,
        data: fixture,
      };

      expect(getCitiesError(fixture)).toEqual(expectedResult);
    });
  });

  describe('getCities', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = expect.any(Function);

      expect(getCities(fixture)).toEqual(expectedResult);
    });
  });

  describe('getRestaurantsForCity', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = expect.any(Function);

      expect(getRestaurantsForCity(fixture)).toEqual(expectedResult);
    });
  });
});
