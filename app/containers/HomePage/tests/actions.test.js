import { GET_CITIES_SUCCESS } from '../constants';

import { getCitiesSuccess } from '../actions';

describe('Home Actions', () => {
  describe('getCities', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = {
        type: GET_CITIES_SUCCESS,
        data: fixture,
      };

      expect(getCitiesSuccess(fixture)).toEqual(expectedResult);
    });
  });
});
