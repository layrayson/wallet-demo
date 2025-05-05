import { View, StyleSheet } from 'react-native';
import React from 'react';
import { AppColors } from '../../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppText } from '../../custom/AppText';
import { formatAmount } from '../../../helpers/format_amount.helper';

type Props = {
  amount: number;
  increment: number;
};
const OverAllBalanceDisplay = ({ amount, increment }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceHeader}>
        <AppText style={styles.balanceHeaderText}>
          <AppText> Total balance in</AppText>{" "}
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
          testID="trending-up-icon"

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
    fontFamily: "Inter-Medium",
  },
  balanceHeaderUSD: {
    fontFamily: "Inter-Bold",
    color: AppColors.gray[700],
  },
  balanceAmountContainer: {
    marginBottom: 6,
  },
  balanceAmountText: {
    fontSize: 40,
    fontFamily: "Inter-Bold",
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
