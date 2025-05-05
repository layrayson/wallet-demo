import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import OverAllBalanceDisplay from '../../../components/shared/OverAllBalanceDisplay';
import {AppText} from '../../../components/custom/AppText';
import {AppColors} from '../../../theme/color';
import MarketTrendList from '../../../components/home/MarketTrendList';
import {useFetchMarketTrends} from '../../../hooks/trends/index.hook';
import {MarketTrendResponse} from '../../../types/trends/res/index.type';
import SearchBar from '../../../components/shared/SearchBar';

const MainHomeScreen = () => {
  const [amount] = useState(10456.9084);
  const [increment] = useState(65.909);
  const {data: fetchMarketTrendsResponse} = useFetchMarketTrends({
    vs_currency: 'usd',
    ids: 'bitcoin,ethereum,usd-coin',
  });

  const trends = useMemo<MarketTrendResponse>(
    () => fetchMarketTrendsResponse || [],
    [fetchMarketTrendsResponse],
  );
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}>
      <View style={styles.mainView}>
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <OverAllBalanceDisplay amount={amount} increment={increment} />
        <View style={styles.marketTrendView}>
          <View style={styles.marketTrendHeader}>
            <AppText style={styles.marketTrendHeaderText}>Market Trend</AppText>

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
  searchBarContainer: {
    marginBottom: 12,
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
    fontSize: 24,
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
