import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App Entry Point', () => {
  it('renders without crashing', async () => {
    const {getByTestId} = render(<App />);

    expect(getByTestId('main-home-screen')).toBeTruthy();
  });
});
