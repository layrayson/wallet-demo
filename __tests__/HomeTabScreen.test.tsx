import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeTabScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

describe('HomeScreen Tab Navigation', () => {
  it('renders Home tab by default and navigates to Assets tab', async () => {
    const {queryByText, getByTestId, getAllByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </QueryClientProvider>,
    );

    // Assert default tab
    await waitFor(() => {
      expect(getByTestId('main-home-screen')).toBeTruthy();
    });

    const assetsTab = getAllByTestId('assets-tab');
    act(() => {
      fireEvent.press(assetsTab[0]);
    });

    await waitFor(() => {
      expect(getByTestId('assets-screen')).toBeTruthy();
    });

    expect(queryByText('Coins')).not.toBeNull();
  });
});
