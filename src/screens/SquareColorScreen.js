import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const colorValueToChange = 50

const reducer = (state, action) => {
    // state == { red: number, green: number, blue: number }
    // action == { colorToChange : red || green || blue, amount: 15 || 15 }

    switch (action.colorToChange) {
        case "red":
            return state.red + action.amount > 255 || state.red + action.amount < 0 
            ? state 
            : { ...state, red: state.red + action.amount }
            // if (state.red + action.amount > 255 || state.red + action.amount < 0)
            //     return state
            // return { ...state, red: state.red + action.amount }
        case "green":
            // if (state.green + action.amount > 255 || state.green + action.amount < 0)
            //     return state
            // return { ...state, green: state.green + action.amount }

            return state.green + action.amount > 255 || state.green + action.amount < 0 
            ? state 
            : { ...state, green: state.green + action.amount }
        case "blue":
            // if (state.blue + action.amount > 255 || state.blue + action.amount < 0)
            //     return state
            // return { ...state, blue: state.blue + action.amount }
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
            ? state 
            : { ...state, blue: state.blue + action.amount }
        default:
            return state
    }

}

const SquareColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state

    return (
        <View>
            <ColorCounter
                colorName="Red"
                onIncrease={() => dispatch({ colorToChange: "red", amount: colorValueToChange })}
                onDecrease={() => dispatch({ colorToChange: "red", amount: -colorValueToChange })} />
            <ColorCounter
                colorName="Green"
                onIncrease={() => dispatch({ colorToChange: "green", amount: colorValueToChange })}
                onDecrease={() => dispatch({ colorToChange: "green", amount: -colorValueToChange })} />
            <ColorCounter colorName="Blue"
                onIncrease={() => dispatch({ colorToChange: "blue", amount: colorValueToChange })}
                onDecrease={() => dispatch({ colorToChange: "blue", amount: -colorValueToChange })} />
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red},${green},${blue})`
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
});

export default SquareColorScreen;

