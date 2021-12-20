import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Box Screen 1</Text>
            <Text style={styles.textStyle2}>Box Screen 2</Text>
            <Text style={styles.textStyle3}>Box Screen 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        alignItems: "center",
        flexDirection: "row",
        height: 200,
        justifyContent: "space-around"
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: "red",
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: "red",
        ...StyleSheet.absoluteFillObject
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: "red",
    }
})

export default BoxScreen;