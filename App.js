import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Clean code', key: '1'},
    {text: 'Finish pluralsight course', key: '2'},
    {text: 'Check on new rails version 7.0', key: '3'}
  ])
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
              data={todos}
              renderItem={({ item}) => (
                  <Text>{item.text}</Text>
              )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
