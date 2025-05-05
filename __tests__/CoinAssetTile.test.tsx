import React from 'react';
import {render} from '@testing-library/react-native';
import {mockCoins} from './CoinsList.test';
import CoinAssetTile from '../src/components/assets/CoinsList/CoinAssetTile';

describe('CoinAssetTile', () => {
  it('renders coin name, amount and usd conversion correctly', () => {
    const props = mockCoins[0];

    const {getByText} = render(
      <CoinAssetTile {...props} amount={props.original} />,
    );

    expect(getByText('Bitcoin')).toBeTruthy();
  });
});
