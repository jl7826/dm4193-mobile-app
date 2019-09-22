import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'uuid';
import List from './List'

export default class Container extends Component {
    state = {
        items: [
            {
                id: uuid.v4(),
                name: "Milk",
                addDate: Date(Date.now()).split(" ").slice(0, 4).join(" "),
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Coffee",
                addDate: Date(Date.now()).split(" ").slice(0, 4).join(" "),
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Tea",
                addDate: Date(Date.now()).split(" ").slice(0, 4).join(" "),
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Eggs",
                addDate: Date(Date.now()).split(" ").slice(0, 4).join(" "),
                completed: false,
                selected: false
            }
        ],

        value: '',
    }

    // onTextInputChange(event){
    //     this.setState({value: event.target.value})
    // }

    // onButtonClick() {
    //     const list = this.state.items;
    //     list.push({id: uuid.v4(), name: this.state.value, addDate: Date(Date.now()).split(" ").slice(0, 4).join(" "), completed: false, selected: false})
    //     this.setState({items: list, value: ""})
    // }

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
    // delItem = (id) => {
    //     this.setState({
    //         items: this.state.items.filter(item => item.id !== id)
    //     }) 
    // }

    // multiSelect = (id) => {
    //     this.setState({
    //         items: this.state.items.map(item => {
    //             if (item.id === id) {
    //                 item.selected = !item.selected
    //             }
    //             return item
    //         })
    //     })
    // }

    // removeAll = (item) => {
    //     this.setState({
    //         items: this.state.items.filter(item => item.selected === false)
    //     })
    // }

    render() {
        return (
            <View>
                <List 
                    items={this.state.items}
                    onCheck={this.onCheck}
                />
            </View>
        )
    }
}
