import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderStyle: "dashed",
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 10
    }
});

export default TodoItem;