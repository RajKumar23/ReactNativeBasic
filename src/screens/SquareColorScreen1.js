import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareColorScreen1 = () => {
    const [getRedValue, setRedValue] = useState(0)
    const [getGreenValue, setGreenValue] = useState(0)
    const [getBlueValue, setBlueValue] = useState(0)
    const colorValue = 50

    const setColor = (color, changeValue) => {
        //color is going to be "red", "green" or "blue"
        //changeValue is going to be +15 or -15
        switch (color) {
            case "Red": {
                getRedValue + changeValue > 256 || getRedValue + changeValue < 0 ? null : setRedValue(getRedValue + changeValue)
                return
            }
            case "Green": {
                getGreenValue + changeValue > 256 || getGreenValue + changeValue < 0 ? null : setGreenValue(getGreenValue + changeValue)
                return
            }
            case "Blue": {
                getBlueValue + changeValue > 256 || getBlueValue + changeValue < 0 ? null : setBlueValue(getBlueValue + changeValue)
                return
            }
            default:
                return
        }
    }

    return (
        <View>
            <ColorCounter
                colorName="Red"
                onIncrease={() => setColor("Red", colorValue)}
                onDecrease={() => setColor("Red", -colorValue)} />
            <ColorCounter
                colorName="Green"
                onIncrease={() => setColor("Green", colorValue)}
                onDecrease={() => setColor("Green", -colorValue)} />
            <ColorCounter colorName="Blue"
                onIncrease={() => setColor("Blue", colorValue)}
                onDecrease={() => setColor("Blue", -colorValue)} />
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${getRedValue},${getGreenValue},${getBlueValue})`
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
});

export default SquareColorScreen1;

