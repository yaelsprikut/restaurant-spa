/**
 * Test the HomePage
 */

import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';

describe('<HomePage />', () => {
  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onGetCities={() => {}} onGetRestaurantsForCity={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onGetCities', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onGetCities).toBeDefined();
      });

      it('should dispatch getCities when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onGetCities();
        expect(dispatch).toHaveBeenCalled();
      });
    });

    describe('onGetRestaurantsForCity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onGetRestaurantsForCity).toBeDefined();
      });

      it('should dispatch getRestaurantsForCity when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onGetRestaurantsForCity();
        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
