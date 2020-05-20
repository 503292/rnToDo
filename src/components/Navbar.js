import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    fontSize: 28,
    color: 'white',
  },
});

export default Navbar;
