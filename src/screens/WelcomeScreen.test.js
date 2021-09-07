import 'react-native';
import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import WelcomeScreen from './WelcomeScreen';

import { setup, travel, teardown } from '../../jest/time-travel';

describe('WelcomeScreen', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(<WelcomeScreen />);

    expect(getByText('Time Travel Example')).not.toBeNull();

    expect(getByTestId('Animated View')).not.toBeNull();
    expect(getByTestId('Animated Text')).not.toBeNull();

    expect(getByText('Toggle Content')).not.toBeNull();
  });

  it('hide element should not work without time travel on button press', () => {
    const { getByText, getByTestId } = render(<WelcomeScreen />);

    const pressableEl = getByText('Toggle Content');

    const animatedEl = getByTestId('Animated View');
    expect(animatedEl).not.toBeNull();
    expect(animatedEl).toHaveStyle({ opacity: 1 });

    fireEvent.press(pressableEl);

    expect(animatedEl).toHaveStyle({ opacity: 1 });
  });

  it('hide should work with time travel on button press', () => {
    setup();
    const { getByText, getByTestId } = render(<WelcomeScreen />);

    const pressableEl = getByText('Toggle Content');

    const animatedEl = getByTestId('Animated View');
    expect(animatedEl).not.toBeNull();
    expect(animatedEl).toHaveStyle({ opacity: 1 });

    fireEvent.press(pressableEl);

    travel(500);

    expect(animatedEl).not.toHaveStyle({ opacity: 1 });

    teardown();
  });
});
