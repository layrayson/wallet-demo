import {axiosInstance} from '../../axios/client';
import {constructQueryFromParams} from '../../helpers/construct_query.helper';
import {
  CoinPriceRequest,
  MarketTrendRequest,
} from '../../types/trends/req/index.type';
import {
  CoinPriceByUSDResponse,
  MarketTrendResponse,
} from '../../types/trends/res/index.type';

export class TrendsService {
  fetchMarketTrends = async (params: MarketTrendRequest) =>
    await axiosInstance
      .get<unknown, MarketTrendResponse>(
        `/coins/markets${constructQueryFromParams(params)}`,
      )
      .then(response => response)
      .catch(error => {
        throw error;
      });

  fetchCoinPrices = async (params: CoinPriceRequest) =>
    await axiosInstance
      .get<unknown, CoinPriceByUSDResponse>(
        `/simple/price${constructQueryFromParams(params)}`,
      )
      .then(response => response)
      .catch(error => {
        throw error;
      });
}

export const trendsService = new TrendsService();
