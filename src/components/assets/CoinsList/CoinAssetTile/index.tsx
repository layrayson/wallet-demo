import { Image, View } from 'react-native';
import React from 'react';
import { AppText } from '../../../custom/AppText';
import { formatToXDecimalPlaces } from '../../../../helpers/format_amount.helper';
import { AppColors } from '../../../../theme/color';
import { StyleSheet } from 'react-native';
type Props = {
    name: string;
    id: string;
    image: string;
    usdConversion: number;
    amount: number;
};
const CoinAssetTile = ({ name, id, image, amount, usdConversion }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.nameContainer}>
                    <AppText style={styles.nameText}>{name}</AppText>
                </View>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.amountText}>
                        {formatToXDecimalPlaces(amount, 4)} {id.toUpperCase()}
                    </AppText>
                    <AppText style={styles.usdConversionText}>
                        ~${formatToXDecimalPlaces(usdConversion, 2).split('.')[0]}
                        <AppText style={styles.usdConversionDecimalText}>
                            .{formatToXDecimalPlaces(usdConversion, 2).split('.')[1]}
                        </AppText>
                    </AppText>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
            </View>
        </View>
    );
};

export default CoinAssetTile;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 32,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: AppColors.gray[500],
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    amountText: {
        fontFamily: "Inter-Bold",
        fontSize: 16,
    },
    usdConversionText: {
        fontSize: 14,
        fontFamily: "Inter-Bold",

        color: AppColors.gray[700],
    },
    usdConversionDecimalText: {
        fontSize: 14,
        fontFamily: "Inter-Bold",
        color: AppColors.gray[200],
    },
    imageContainer: {
        // width: 60,
        // height: 60,
        // borderRadius: 20,
        // backgroundColor: AppColors.green[100],
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});
