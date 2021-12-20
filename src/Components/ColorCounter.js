import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{colorName}</Text>
            <View style={styles.space} />
            <Button
                title={`Add Less ${colorName}`}
                onPress={onDecrease}
                style={styles.button} />
            <View style={styles.space} />
            <Button
                title={`Add More ${colorName}`}
                onPress={onIncrease}
                style={styles.button} />
        </View>
    )
};
const styles = StyleSheet.create({
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
    button: {
        flex: 1,
        paddingTop: 50,
        marginBottom: 50
    },
});

export default ColorCounter;

