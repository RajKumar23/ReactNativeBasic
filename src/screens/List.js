import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListView = () => {

  const getFriendsName = [
    { name: "Raj", age: 27, key: 1 },
    { name: "Kumar", age: 26, key: 2, },
    { name: "Muthu", age: 20, key: 3, },
    { name: "Vicky", age: 18, key: 4, },
    { name: "Mani", age: 18, key: 5 }
  ]

  return (
    <View style={styles.container}>
      <FlatList data={getFriendsName}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View>
            <Text style = {styles.text}>{item.name} - Age {item.age}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    borderWidth: 3,
    marginVertical: 70,
    borderColor: "red",
    padding: 5
  }
});

export default ListView;
