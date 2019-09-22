import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TodoList from './components/TodoList'

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


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo App</Text>
      </View>
      <View style={styles.mainContent}>
        <TodoList />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}