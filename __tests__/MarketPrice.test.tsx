import React from 'react';
import {render} from '@testing-library/react-native';

import {mockTrends} from './MarketTrendList.test';
import MarketPriceTile from '../src/components/home/MarketTrendList/MarketPriceTile';

jest.mock('../src/helpers/format_amount.helper', () => ({
  formatAmount: jest.fn().mockReturnValue('100,000'),
}));

describe('MarketPriceTile', () => {
  it('should render correctly with name, image, and amount', () => {
    const mockProps = mockTrends[0];

    const {getByText, getByTestId} = render(
      <MarketPriceTile {...mockProps} amount={mockProps.current_price} />,
    );

    expect(getByText(mockProps.name)).toBeTruthy();

    const imageElement = getByTestId('coin-image');
    expect(imageElement.props.source.uri).toBe(mockProps.image);
  });
});
