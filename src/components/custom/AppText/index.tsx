// components/AppText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useAppTheme } from '../../../theme/ThemeContext';

export const AppText = ({ style, ...props }: TextProps) => {
    const { theme } = useAppTheme();

    return (
        <Text
            {...props}
            style={[styles.text, { color: theme.text }, style]}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
});
