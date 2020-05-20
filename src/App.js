/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {} from 'react-native';

import React, {useState} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';

import Navbar from './components/Navbar';
import AddToDo from './components/AddToDo';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const deleteTodo = id => {
    const clearArr = todos.filter(el => el.id !== id);
    setTodos(clearArr);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Navbar title="Todo app" />
        <View style={styles.container}>
          <AddToDo onSubmit={addTodo} />
          <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: '100%'}}
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => (
              <Todo id={item.id} deleteTodo={deleteTodo} title={item.title} />
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default App;
