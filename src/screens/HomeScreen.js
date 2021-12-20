import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Component")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to Generate Color Demo"
        onPress={() => navigation.navigate("GenerateColor")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to Square Color Demo"
        onPress={() => navigation.navigate("SquareColor")}
        style={styles.button} />
      <View style={styles.space} />
      <Button
        title="Go to Text Input Demo"
        onPress={() => navigation.navigate("TextInput")}
        style={styles.button} />
        <View style={styles.space} />
        <Button
          title="Go to Box Screen Demo"
          onPress={() => navigation.navigate("Box")}
          style={styles.button} />
          <View style={styles.space} />
          <Button
            title="Go to Task Box Screen Demo"
            onPress={() => navigation.navigate("BoxTask")}
            style={styles.button} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  text: {
    fontSize: 30
  },
  button: {
    flex: 1,
    paddingTop: 50,
    marginBottom: 50
  },
});

export default HomeScreen;
