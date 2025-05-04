import {View, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppText} from '../../custom/AppText';
import {formatAmount} from '../../../helpers/formatAmount.helper';

type Props = {
  amount: number;
  increment: number;
};
const OverAllBalanceDisplay = ({amount, increment}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceHeader}>
        <AppText style={styles.balanceHeaderText}>
          Total balance in{' '}
          <AppText style={styles.balanceHeaderUSD}>USD</AppText>
        </AppText>
      </View>
      <View style={styles.balanceAmountContainer}>
        <AppText style={styles.balanceAmountText}>
          ${formatAmount(amount)}
        </AppText>
      </View>
      <View style={styles.incrementContainer}>
        <Icon
          name="trending-up"
          size={16}
          color={AppColors.green[500]}
          style={styles.incrementIcon}
        />
        <AppText style={styles.incrementText}>
          +$
          {formatAmount(increment)}
        </AppText>
        <AppText style={styles.incrementTotalText}>total</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  balanceHeader: {
    marginBottom: 10,
  },
  balanceHeaderText: {
    fontSize: 16,
    color: AppColors.gray[500],
    fontWeight: 500,
  },
  balanceHeaderUSD: {
    fontWeight: 600,
    color: AppColors.gray[700],
  },
  balanceAmountContainer: {
    marginBottom: 6,
  },
  balanceAmountText: {
    fontSize: 40,
    fontWeight: 700,
    color: AppColors.gray[900],
  },
  incrementContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  incrementIcon: {
    padding: 0,
    margin: 0,
    height: 16,
  },
  incrementText: {
    fontSize: 16,
    color: AppColors.green[500],
  },
  incrementTotalText: {
    color: AppColors.gray[700],
    fontWeight: 500,
  },
});

export default OverAllBalanceDisplay;
