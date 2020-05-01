import homeReducer from '../reducer';
import { getCitiesSuccess, getRestaurantsForCitySuccess } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      city: null,
      restaurants: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getCitiesSuccess action correctly', () => {
    const fixture = {};
    const expectedResult = { ...state, city: fixture };

    expect(homeReducer(state, getCitiesSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the getRestaurantsForCitySuccess action correctly', () => {
    const fixture = [];
    const expectedResult = { ...state, restaurants: [fixture] };

    expect(homeReducer(state, getRestaurantsForCitySuccess(fixture))).toEqual(expectedResult);
  });
});
