import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import OverAllBalanceDisplay from '../../../components/shared/OverAllBalanceDisplay';
import { AppText } from '../../../components/custom/AppText';
import { AppColors } from '../../../theme/color';
import MarketTrendList from '../../../components/home/MarketTrendList';

const MainHomeScreen = () => {
  const trends = [
    {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      image:
        'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
      current_price: 45000,
      market_cap: 100000000000,
      market_cap_rank: 1,
      fully_diluted_valuation: 200000000000,
      total_volume: 100000000,
      high_24h: 46000,
      low_24h: 44000,
      price_change_24h: 1000,
      price_change_percentage_24h: 2.27,
      market_cap_change_24h: 200000000,
      market_cap_change_percentage_24h: 0.2,
      circulating_supply: 19000000,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 64000,
      ath_change_percentage: -29.69,
      ath_date: '2021-04-14T11:54:46.257Z',
      atl: 65.53,
      atl_change_percentage: 68491.49,
      atl_date: '2013-07-05T00:00:00Z',
      roi: null,
      last_updated: '2022-08-10T14:49:59.999Z',
    },
    {
      id: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      image:
        'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
      current_price: 3200,
      market_cap: 400000000000,
      market_cap_rank: 2,
      fully_diluted_valuation: 800000000000,
      total_volume: 200000000,
      high_24h: 3300,
      low_24h: 3100,
      price_change_24h: 100,
      price_change_percentage_24h: 3.23,
      market_cap_change_24h: 100000000,
      market_cap_change_percentage_24h: 0.25,
      circulating_supply: 120000000,
      total_supply: 120000000,
      max_supply: 1333,
      ath: 4400,
      ath_change_percentage: -27.27,
      ath_date: '2021-11-16T05:57:01.257Z',
      atl: 0.432979,
      atl_change_percentage: 739.49,
      atl_date: '2015-08-29T00:00:00Z',
      roi: 1223,
      last_updated: '2022-08-10T14:49:59.999Z',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}>
      <View style={styles.mainView}>
        <OverAllBalanceDisplay amount={230456.9084} increment={565.909} />
        <View style={styles.marketTrendView}>
          <View
            style={styles.marketTrendHeader}>
            <AppText style={styles.marketTrendHeaderText}>
              Market Trend
            </AppText>

            <TouchableOpacity>
              <AppText style={styles.seeAllText}>See all</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.marketTrendList}>
            <MarketTrendList trends={trends} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: AppColors.white[900],
  },
  mainView: {
    flex: 1,
    padding: 16,
  },
  marketTrendView: {
    flex: 1,
    marginTop: 24,
  },
  marketTrendHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marketTrendHeaderText: {
    fontSize: 28,
    fontWeight: 700,
  },
  seeAllText: {
    fontWeight: 500,
    fontSize: 12,
  },
  marketTrendList: {
    marginTop: 16,
  },
});

export default MainHomeScreen;
