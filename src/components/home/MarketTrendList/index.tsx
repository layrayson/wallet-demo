import { StyleSheet, View } from 'react-native';
import React from 'react';
import MarketPriceTile from './MarketPriceTile';
import { Trend } from '../../../types/trends/res/index.type';

type Props = {
    trends: Trend[];
};
const MarketTrendList = ({ trends }: Props) => {
    return (
        <View style={styles.container}>
            {trends.map((el, index) => (
                <MarketPriceTile
                    key={'price-trend' + index}
                    name={el.name}
                    image={el.image}
                    amount={el.current_price}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
});

export default MarketTrendList;
