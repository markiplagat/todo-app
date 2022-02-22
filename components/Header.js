import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
