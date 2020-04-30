import { CHANGE_USERNAME } from '../constants';

import { getCities } from '../actions';

describe('Home Actions', () => {
  describe('getCities', () => {
    it('should return the correct type and the passed city', () => {
      const fixture = {};
      const expectedResult = {
        type: CHANGE_USERNAME,
        city: fixture,
      };

      expect(getCities(fixture)).toEqual(expectedResult);
    });
  });
});
