import React from 'react';
import { shallow } from 'enzyme';

import Table from '../index';

describe('<Table />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Table />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render the helper widget', () => {
    const renderedComponent = shallow(<Table />);
    expect(renderedComponent.text()).toContain('Note: ');
  });
});
