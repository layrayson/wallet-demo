import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import OverAllBalanceDisplay from '../../../components/shared/OverAllBalanceDisplay';
import {AppColors} from '../../../theme/color';
import {AppText} from '../../../components/custom/AppText';
import CoinsList from '../../../components/assets/CoinsList';
import {useFetchMarketTrends} from '../../../hooks/trends/index.hook';
import {CoinAsset} from '../../../types/trends/res/index.type';
import SearchBar from '../../../components/shared/SearchBar';

const AssetsScreen = () => {
  const [amount] = useState(10456.9084);
  const [increment] = useState(65.909);

  const {data: coinPriceResponse} = useFetchMarketTrends({
    vs_currency: 'usd',
    ids: 'bitcoin,ethereum,usd-coin',
  });

  const coinAssets = useMemo<CoinAsset[]>(
    () =>
      coinPriceResponse
        ? coinPriceResponse.map(el => ({
            ...el,
            usdConversion:
              amount *
              (el.id == 'bitcoin' ? 0.2 : el.id == 'ethereum' ? 0.3 : 0.5),
            original:
              (amount *
                (el.id == 'bitcoin' ? 0.2 : el.id == 'ethereum' ? 0.3 : 0.5)) /
              el.current_price,
          }))
        : [],
    [coinPriceResponse, amount],
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
            <AppText style={styles.marketTrendHeaderText}>Coins </AppText>
          </View>

          <View style={styles.marketTrendList}>
            <CoinsList coins={coinAssets} />
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
  marketTrendList: {
    marginTop: 16,
  },
});

export default AssetsScreen;
