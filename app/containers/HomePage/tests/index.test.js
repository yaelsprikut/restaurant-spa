/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import ReposList from 'components/ReposList';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { getCities } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />,
    );
    expect(
      renderedComponent.contains(
        <ReposList loading error={false} repos={[]} />,
      ),
    ).toEqual(true);
  });

  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        city="Not Empty"
        onGetCities={() => {}}
        onSubmitForm={submitSpy}
      />,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onGetCities={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if city is null', () => {
    const submitSpy = jest.fn();
    mount(<HomePage city="" onGetCities={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onGetCities', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onGetCities).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const city = {};
        result.onGetCities({ target: { value: city } });
        expect(dispatch).toHaveBeenCalledWith(getCities(city));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
