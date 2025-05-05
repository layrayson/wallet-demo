import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import * as trendsHook from '../src/hooks/trends/index.hook';
import MainHomeScreen from '../src/screens/tabs/MainHomeScreen';

jest.mock('../src/hooks/trends/index.hook');

describe('Test Main Home Screen', () => {
    const mockTrends = [
        {
            id: 'bitcoin',
            symbol: 'btc',
            name: 'Bitcoin',
            image: 'https://bitcoin.org/img/icons/opengraph.png',
            current_price: 60000,
            market_cap: 1000000000,
            market_cap_rank: 1,
            fully_diluted_valuation: 1100000000,
            total_volume: 50000000,
            high_24h: 60500,
            low_24h: 59000,
            price_change_24h: 1000,
            price_change_percentage_24h: 1.5,
            market_cap_change_24h: 15000000,
            market_cap_change_percentage_24h: 1.2,
            circulating_supply: 19000000,
            total_supply: 21000000,
            max_supply: 21000000,
            ath: 69000,
            ath_change_percentage: -13,
            ath_date: '2021-11-10T00:00:00Z',
            atl: 100,
            atl_change_percentage: 59900,
            atl_date: '2013-07-05T00:00:00Z',
            roi: null,
            last_updated: new Date().toISOString(),
        },
    ];

    let rest: any = {}

    beforeEach(() => {
        jest.spyOn(trendsHook, 'useFetchMarketTrends').mockReturnValue({
            data: mockTrends,
            ...rest
        });
    });

    it('renders balance, search bar, and market trends', async () => {
        const { getByText, getByPlaceholderText, } = render(<MainHomeScreen />);

        expect(getByText('Total balance in')).toBeTruthy();
        expect(getByText('$10,456.91')).toBeTruthy();

        expect(getByText('+$65.91')).toBeTruthy();
        expect(getByText('total')).toBeTruthy();

        expect(getByText('Market Trend')).toBeTruthy();
        expect(getByText('See all')).toBeTruthy();

        await waitFor(() => {
            expect(getByText('Bitcoin')).toBeTruthy();
        });

        const input = getByPlaceholderText('Search');
        fireEvent.changeText(input, 'Bitcoin');
        expect(input.props.value).toBe('Bitcoin');
    });
});
