import React from 'react';
import renderer from 'react-test-renderer';
import HowTo from '../../components/HowTo';

it('renders correctly', () => {
  const quotePage = renderer
    .create(<HowTo />)
    .toJSON();
  expect(quotePage).toMatchSnapshot();
});