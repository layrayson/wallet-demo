import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../../../theme/color';
import {AppText} from '../../../custom/AppText';
import {formatAmount} from '../../../../helpers/formatAmount.helper';

type Props = {
  name: string;
  image: string;
  amount: number;
};

const MarketPriceTile = ({name, image, amount}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.nameText}>{name}</AppText>
        <AppText style={styles.amountText}>${formatAmount(amount)}</AppText>
      </View>
    </View>
  );
};

export default MarketPriceTile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: AppColors.green[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  textContainer: {},
  nameText: {
    fontSize: 14,
    fontWeight: 700,
    color: AppColors.gray[700],
  },
  amountText: {
    fontSize: 12,
    fontWeight: 600,
    color: AppColors.green[500],
  },
});
