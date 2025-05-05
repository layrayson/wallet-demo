import React from 'react';
import { render } from '@testing-library/react-native';
import OverAllBalanceDisplay from '../src/components/shared/OverAllBalanceDisplay';

jest.mock('../src/helpers/format_amount.helper', () => ({
    formatAmount: jest.fn((val) => val.toLocaleString()),
}));

describe('OverAllBalanceDisplay', () => {
    it('renders the total amount, increment, and icon correctly', () => {
        const props = {
            amount: 250000,
            increment: 5000,
        };

        const { getByText, getByTestId } = render(<OverAllBalanceDisplay {...props} />);

        expect(getByText('Total balance in')).toBeTruthy();
        expect(getByText('USD')).toBeTruthy();

        expect(getByText('$250,000')).toBeTruthy();

        expect(getByText('+$5,000')).toBeTruthy();
        expect(getByText('total')).toBeTruthy();

        const icon = getByTestId('trending-up-icon');
        expect(icon).toBeTruthy();
    });
});
