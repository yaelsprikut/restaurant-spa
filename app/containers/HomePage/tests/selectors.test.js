import {
  selectHome, makeSelectUsername, makeSelectCities, makeSelectRestaurants
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the username', () => {
    const username = 'flexdinesh';
    const mockedState = {
      home: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});

describe('makeSelectCities', () => {
  const citySelector = makeSelectCities();
  it('should select the cities', () => {
    const city = 'Toronto';
    const mockedState = {
      home: {
        city,
      },
    };
    expect(citySelector(mockedState)).toEqual(city);
  });
});

describe('makeSelectRestaurants', () => {
  const restaurantSelector = makeSelectRestaurants();
  it('should select the restaurants', () => {
    const restaurants = 'Arbys';
    const mockedState = {
      home: {
        restaurants,
      },
    };
    expect(restaurantSelector(mockedState)).toEqual(restaurants);
  });
});
