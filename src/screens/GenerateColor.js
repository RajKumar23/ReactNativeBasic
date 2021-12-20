import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const GenerateColorScreen = () => {
    const [getColorValue, setColorValue] = useState([])
    console.log(getColorValue)

    return (
        <View>
            <Button
                title="Add color"
                onPress={() => { setColorValue([...getColorValue, randomColor()]) }}
                style={styles.button} />

            <FlatList data={getColorValue}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    </View>
                )}
            />
        </View>
    )
};

const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

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

export default GenerateColorScreen;

