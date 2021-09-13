import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Clean code', key: '1'},
    {text: 'Finish pluralsight course', key: '2'},
    {text: 'Check on new rails version 7.0', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  };

  const addTodoHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {
            text: text,
            key: Math.random().toString()
          },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Error: ', 'Text should be more than 3 characters', [
        {text: 'Got It', onPress: () => console.log('understood')}
      ]);
    }
  };

  return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo addTodoHandler={addTodoHandler} />
            <View style={styles.list}>
              <FlatList
                  data={todos}
                  renderItem={({ item}) => (
                      <TodoItem
                          item={item}
                          pressHandler={pressHandler}
                      />
                  )}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
