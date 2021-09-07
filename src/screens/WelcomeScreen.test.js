import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

import WelcomeScreen from './WelcomeScreen';


describe('WelcomeScreen', () => {
  it('should render correctly', () => {
    renderer.create(<WelcomeScreen />);
  });
});
