import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreenTask = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewStyle1}></View>
            <View style={styles.viewStyle2}></View>
            <View style={styles.viewStyle3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: "black",
        margin: 5,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewStyle1: {
        backgroundColor: "red",
        height: 100,
        width: 100
    },
    viewStyle2: {
        backgroundColor: "green",
        height: 100,
        // alignSelf: "flex-end",
        marginTop: 100,
        width: 100
    },
    viewStyle3: {
        backgroundColor: "blue",
        height: 100,
        width: 100
    }
})

export default BoxScreenTask;