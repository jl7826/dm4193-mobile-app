import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import TodoItem from './TodoItem'
import uuid from 'uuid';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },

    input: {
        flex: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        padding: 9,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 10,
        marginRight: 5,
    },

    button: {
        flex: 2,
        backgroundColor: "aqua",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 10,
    },

    buttonText: {
        color: "darkblue",
        fontWeight: "bold",
    },

    todos: {
        flexDirection: 'column',
        margin: 10,
    },

    removeAll: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "red",
        margin: 10,
        padding: 5,
    },

    removeAllText: {
        fontSize: 16,
        color: "white",
    },

})

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            items: [
                {
                    id: uuid.v4(),
                    name: "Milk",
                    addDate: Date(Date.now()).split(" ").slice(0, 5).join(" "),
                    completed: false,
                    selected: false
                },
                {
                    id: uuid.v4(),
                    name: "Coffee",
                    addDate: Date(Date.now()).split(" ").slice(0, 5).join(" "),
                    completed: false,
                    selected: false
                },
            ]
        }

        this.onBoundInputChange = this.onInputChange.bind(this)
        this.onBoundButtonPress = this.onButtonPress.bind(this)
    }

    onInputChange(text) {
        this.setState({ value: text })
    }

    onButtonPress() {
        const items = this.state.items
        items.push({
            id: uuid.v4(),
            name: this.state.value,
            addDate: Date(Date.now()).split(" ").slice(0, 5).join(" "),
            completed: false,
            selected: false
        })
        this.setState({ value: '', items: items })
    }

    onCheck = (id) => {
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
        })
    }

    // // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // // newArr = arr.filter((element) => condition)
    delItem = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        })
    }

    multiSelect = (id) => {
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    item.selected = !item.selected
                }
                return item
            })
        })
    }

    removeAll = (item) => {
        this.setState({
            items: this.state.items.filter(item => item.selected === false)
        })
    }

    render() {

        const todoItems = this.state.items.map((item) =>
            <TodoItem
                key={item.id}
                item={item}
                onCheck={this.onCheck}
                delItem={this.delItem}
                multiSelect={this.multiSelect}
            />)

        const numSelected = this.state.items.filter(item => item.selected === true).length

        return (
            <View style={styles.container}>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="New Task?"
                        value={this.state.value}
                        style={styles.input}
                        onChangeText={this.onBoundInputChange}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onBoundButtonPress}
                        disabled={this.state.value === ''}>

                        <Text style={styles.buttonText}>Add</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    {todoItems}
                </View>

                {/* Try to put this as a separate component that can be hidden */}
                <TouchableOpacity
                    style={styles.removeAll}
                    onPress={this.removeAll.bind(this)}>
                    <Text style={styles.removeAllText}>Delete {numSelected} Items</Text>
                </TouchableOpacity>
            </View>
        )
    }
}