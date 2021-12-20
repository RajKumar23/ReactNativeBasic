import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    //state == {getCounterValue: number}
    //action == {valueToChange : increase || decrease}
    switch (action.valueToChange) {
        case "increase":
            return { ...state, getCounterValue: state.getCounterValue + 1 }
        case "decrease":
            return { ...state, getCounterValue: state.getCounterValue - 1 }
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { getCounterValue: 0 })
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => dispatch({ valueToChange: "increase" })}
                style={styles.button} />
            <View style={styles.space} />
            <Button
                title="Decrease"
                onPress={() => dispatch({ valueToChange: "decrease" })}
                style={styles.button} />
            <View style={styles.space} />
            <Text>Current Counter: {state.getCounterValue}</Text>
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

export default CounterScreen;

