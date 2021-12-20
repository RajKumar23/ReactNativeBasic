import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {

    const name = "Raj"

    return (
        <View>
            <Text style={styles.text1}>Getting started with React Native</Text>
            <Text style={styles.text2}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text1: {
        fontSize: 45
    },
    text2: {
        fontSize: 20
    }
});

export default ComponentsScreen;
