import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageScreen = (props) => {
    return (
        <View>
            <Image 
            source={props.imageSource} 
            style={{ width: 100, height: 100 }} />
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>Image rating - {props.rating}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
});

export default ImageScreen;

