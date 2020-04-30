import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectUsername = () => createSelector(selectHome, (homeState) => homeState.username);
const makeSelectCities = () => createSelector(selectHome, (homeState) => homeState.city);
const makeSelectRestaurants = () => createSelector(selectHome, (homeState) => homeState.restaurants);

export {
  selectHome, makeSelectUsername, makeSelectCities, makeSelectRestaurants
};
