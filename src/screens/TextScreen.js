import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [getName, setName] = useState("")
    const [getPassword, setPassword] = useState("")
    return (
        <View>
            <Text>Enter the name:</Text>
            <View style={styles.space} />
            <TextInput
                style={styles.inputTextStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={getName}
                placeholder="Name"
                onChangeText={text => setName(text)} />
            <View style={styles.space} />
            <Text>Your name is {getName}</Text>

            <View style={styles.space} />
            <Text>Enter the password:</Text>
            <TextInput
                style={styles.inputTextStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={getPassword}
                placeholder="Password"
                onChangeText={text => setPassword(text)} />
            <Text style={styles.errorTextStyle}>{getPassword.length <= 5 ? "Password must be longer than 5 char" : null}</Text>
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
    inputTextStyle: {
        borderColor: "gray",
        borderWidth: 3,
        padding: 5,
        margin: 10
    },
    errorTextStyle: {
        color: "red"
    }
});

export default TextScreen;

