import {useQuery} from '@tanstack/react-query';
import {
  CoinPriceByUSDResponse,
  MarketTrendResponse,
} from '../../types/trends/res/index.type';
import {
  CoinPriceRequest,
  MarketTrendRequest,
} from '../../types/trends/req/index.type';
import {trendsService} from '../../services/trends/index.service';

export const useFetchMarketTrends = (params: MarketTrendRequest) => {
  return useQuery<MarketTrendResponse, Error>({
    queryKey: ['fetch-market-trends', params],
    queryFn: () => trendsService.fetchMarketTrends(params),
  });
};

export const useFetchCoinPrice = (params: CoinPriceRequest) => {
  return useQuery<CoinPriceByUSDResponse, Error>({
    queryKey: ['fetch-coin-price', params],
    queryFn: () => trendsService.fetchCoinPrices(params),
  });
};
