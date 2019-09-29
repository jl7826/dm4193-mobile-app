/*NOTE
I have spent way too much time on trying to make a separate screen for adding new items (although I've failed). So I couldn't get much done other than barely adding detail screen. I need to figure out how to pass functions with getParam
*/

/*
IMPROVEMENTS to consider:
- Simplify styling by combining overlapping properties
- make delete all btn show and hide based on numSelect
- See the documentation on SectionList (it's like sorting by...)
- separate screen for adding new items
*/

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TodoList from './components/TodoList'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Details from './components/Details'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: '#1EE3CF',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },

  mainContent: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
  },

  footer: {
    height: 75,
    backgroundColor: '#0D3F67',
    borderRadius: 20,
    marginTop: 10,
  },

  header: {
    height: 75,
    backgroundColor: '#6B48FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 10
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

const AppStackNavigator = createStackNavigator({
  Todos: TodoList,
  Details: Details,
}, {
  initialRouteName: 'Todos'
})

const AppContainer = createAppContainer(AppStackNavigator)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo App</Text>
      </View>
      <View style={styles.mainContent}>
        <AppContainer/>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}