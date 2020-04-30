import homeReducer from '../reducer';
import { getCities } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      city: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = {};
    const expectedResult = { ...state, city: fixture };

    expect(homeReducer(state, getCities(fixture))).toEqual(expectedResult);
  });
});
