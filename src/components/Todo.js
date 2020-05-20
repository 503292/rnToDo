import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Todo = ({title, id, deleteTodo}) => (
  <TouchableOpacity>
    <View style={styles.todo}>
      <Text>{title}</Text>
      <Button
        style={styles.btn}
        color="tomato"
        title="Видалити"
        onPress={() => deleteTodo(id)}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  btn: {
    color: '#eee',
    backgroundColor: '#000',
    padding: 15,
  },
});

export default Todo;
