import React from 'react';
import {render} from '@testing-library/react-native';
import CoinsList from '../src/components/assets/CoinsList';
import {CoinAsset} from '../src/types/trends/res/index.type';

export const mockCoins: CoinAsset[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 94026,
    market_cap: 1867856743059,
    market_cap_rank: 1,
    fully_diluted_valuation: 1867859658616,
    total_volume: 17879398968,
    high_24h: 96255,
    low_24h: 94050,
    price_change_24h: -1895.2552616469475,
    price_change_percentage_24h: -1.97584,
    market_cap_change_24h: -37665338774.141846,
    market_cap_change_percentage_24h: -1.97664,
    circulating_supply: 19860206,
    total_supply: 19860237,
    max_supply: 21000000,
    ath: 108786,
    ath_change_percentage: -13.19192,
    ath_date: '2025-01-20T09:11:54.494Z',
    atl: 67.81,
    atl_change_percentage: 139165.6292,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2025-05-05T01:38:47.900Z',

    original: 0.5,
    usdConversion: 25000,
  },
  {
    id: 'ethereum',
    symbol: 'btc',
    name: 'Ethereum',
    image:
      'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 94026,
    market_cap: 1867856743059,
    market_cap_rank: 1,
    fully_diluted_valuation: 1867859658616,
    total_volume: 17879398968,
    high_24h: 96255,
    low_24h: 94050,
    price_change_24h: -1895.2552616469475,
    price_change_percentage_24h: -1.97584,
    market_cap_change_24h: -37665338774.141846,
    market_cap_change_percentage_24h: -1.97664,
    circulating_supply: 19860206,
    total_supply: 19860237,
    max_supply: 21000000,
    ath: 108786,
    ath_change_percentage: -13.19192,
    ath_date: '2025-01-20T09:11:54.494Z',
    atl: 67.81,
    atl_change_percentage: 139165.6292,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2025-05-05T01:38:47.900Z',

    original: 0.5,
    usdConversion: 25000,
  },
];

describe('CoinsList', () => {
  it('renders a list of CoinAssetTile components', () => {
    const {getAllByText} = render(<CoinsList coins={mockCoins} />);

    expect(getAllByText(/Bitcoin|Ethereum/i)).toHaveLength(2);
    expect(getAllByText(/BTC|ETH/i).length).toBeGreaterThan(0);
  });
});
