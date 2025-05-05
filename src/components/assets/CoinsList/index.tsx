import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CoinAsset} from '../../../types/trends/res/index.type';
import CoinAssetTile from './CoinAssetTile';

type Props = {
  coins: CoinAsset[];
};
const CoinsList = ({coins}: Props) => {
  return (
    <View style={styles.container}>
      {coins.map((el, index) => (
        <CoinAssetTile
          key={'coin-asset-' + index}
          name={el.name}
          id={el.symbol}
          amount={el.original}
          usdConversion={el.usdConversion}
          image={el.image}
        />
      ))}
    </View>
  );
};

export default CoinsList;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
