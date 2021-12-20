import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen1 = () => {
    const [getCounterValue, setCounterValue] = useState(0)
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => setCounterValue(getCounterValue + 1)}
                style={styles.button} />
            <View style={styles.space} />
            <Button
                title="Decrease"
                onPress={() => setCounterValue(getCounterValue - 1)}
                style={styles.button} />
            <View style={styles.space} />
            <Text>Current Counter: {getCounterValue}</Text>
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

export default CounterScreen1;

