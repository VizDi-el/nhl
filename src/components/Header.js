import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
            Otsikko
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 25,
        alignItems: "center",
        borderBottomWidth: 3,
        borderColor: '#000000'
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    }
})

const {headerContainer, header} = styles;

export default Header;