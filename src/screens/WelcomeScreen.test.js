import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';

import WelcomeScreen from './WelcomeScreen';

describe('WelcomeScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<WelcomeScreen />);

    expect(getByText('Time Travel Example')).not.toBeNull();
    expect(getByText('Hide Content')).not.toBeNull();
  });
});
