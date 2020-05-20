import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

const AddToDo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('введіть щось у поле');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Ввести завдання"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      <Button style={styles.btn} title="Добавити" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    padding: 10,
  },
  btn: {
    color: 'red',
  },
});

export default AddToDo;
