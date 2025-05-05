import {useQuery} from '@tanstack/react-query';
import {MarketTrendResponse} from '../../types/trends/res/index.type';
import {MarketTrendRequest} from '../../types/trends/req/index.type';
import {trendsService} from '../../services/trends/index.service';

export const useFetchMarketTrends = (params: MarketTrendRequest) => {
  return useQuery<MarketTrendResponse, Error>({
    queryKey: ['fetch-market-trends', params],
    queryFn: () => trendsService.fetchMarketTrends(params),
  });
};
