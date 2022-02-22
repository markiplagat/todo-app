import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons name="delete" size={18} color="#333" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderStyle: 'dashed',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  itemText: {
    marginRight: 16,
  },
});

export default TodoItem;
