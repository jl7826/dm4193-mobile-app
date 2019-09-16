//UPLOAD THIS ASSIGNMENT (PROVIDE A GLITCH LINK)
//https://github.com/BarakChamo/Mobile-Application-Development/issues/1

import React, { Component } from 'react'
import ListItem from './ListItem'
import uuid from 'uuid';

export default class List extends Component {

    //removed componentWillMount due to warning
    state = {
        items: [
            {
                id: uuid.v4(),
                name: "Milk",
                // addDate: Date(Date.now()).toString(),
                addDate: 'Fri Sept 13 2019',
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Coffee",
                // addDate: Date(Date.now()).toString(),
                addDate: 'Fri Sept 13 2019',
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Tea",
                // addDate: Date(Date.now()).toString(),
                addDate: 'Fri Sept 13 2019',
                completed: false,
                selected: false
            },
            {
                id: uuid.v4(),
                name: "Eggs",
                // addDate: Date(Date.now()).toString(),
                addDate: 'Fri Sept 13 2019',
                completed: false,
                selected: false
            }
        ],

        value: '',
    }

    onTextInputChange(event){
        this.setState({value: event.target.value})
    }

    onButtonClick() {
        const list = this.state.items;
        // list.push({id: uuid.v4(), name: this.state.value, addDate: Date(Date.now()).toString()})
        this.setState({items: list, value: ""})
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

    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // newArr = arr.filter((element) => condition)
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

        const listItems = []
    
        for(let i = 0; i < this.state.items.length; i++) {
          listItems.push(<ListItem
             key={this.state.items[i].id} 
             name={this.state.items[i].name} 
             date={this.state.items[i].addDate} 
             completed={this.state.items[i].completed}
             selected={this.state.items[i].selected}
             id = {this.state.items[i].id}
             onCheck={this.onCheck}
             delItem={this.delItem}
             multiSelect={this.multiSelect}
             />)
        }

        const numSelected = this.state.items.filter(item => item.selected === true).length

        return (
            <div style={todoList}>
                <div style={input}>
                    <input style={inputText} type="text" placeholder='New task?' value={this.state.value} onChange={this.onTextInputChange.bind(this)}/>
                    <button style={inputBtn} disabled={this.state.value === ''} onClick={this.onButtonClick.bind(this)}>Add</button>
                </div>
                
                <ul style={itemsContainer}>
                    {listItems}
                </ul>
               
                <div style={multiSelect}>
                    <div style={{display: 'inline-block'}}>{numSelected} items selected</div>
                    <button style={multiSelectBtn} disabled={numSelected === 0} onClick={this.removeAll.bind(this)}>X</button>
                </div>
                
            </div>
        )
    }
}

const todoList = {
    maxWidth: '350px',
    background: '#BBDED6',
    color: 'white',
    margin: '50px auto', 
    borderRadius: '5px',
    minHeight: "500px",
    padding: "10px"
}

const input = { 
    display: "flex",
    margin: "10px"
}

const inputText = {
    flex: "10",
    height: "25px",
    border: 'solid 1px #ccc',
    borderRadius: "5px",
    margin: "0 5px"
}

const inputBtn = {
    flex: "1",
    borderRadius: "5px"
}

const itemsContainer = {
    backgroundColor: "#FFB6B9",
    borderRadius: "5px",
    minHeight: "400px",
    margin: '0 auto',
    padding: '10px',
}

const multiSelect = {
    float: "right",
    fontSize: "12px"
}

const multiSelectBtn = {
    margin: '5px',
    padding: '0',
    width: '20px',
    height: '20px'
}

//emoji support?
//https://medium.com/@allegra9/add-emoji-picker-to-your-react-chat-app-30d8cbe8d9a6
