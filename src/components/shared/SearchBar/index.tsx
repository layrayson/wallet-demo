import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <View style={styles.container} >
            <Icon name="search" size={20} color="#ccc" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#ccc"
                testID='search-input'
                value={query}
                onChangeText={setQuery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        paddingHorizontal: 20,
        height: 50,

        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#333',
        fontSize: 18,
        fontWeight: 600,
    },
});

export default SearchBar;
