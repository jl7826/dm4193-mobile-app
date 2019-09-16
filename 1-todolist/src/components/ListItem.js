import React, { Component } from 'react'

export default class ListItem extends Component {

    nameStyle = () => {
        return {
            // margin: '10px 20px',
            // condition ? exprIfTrue : exprIfFalse
            color: this.props.completed ? '#f4f4f4' : 'black'
        }
    }

    selectStyle = () => {
        return {
            backgroundColor: this.props.selected ? '#f4f4f4' : 'inherit',
            display: 'inline-block'
        }
    }

    //Find Destructuring Props in React

    render() {
        return (
            <div style={item}>
                <li style={this.nameStyle()}>
                    <input type='checkbox' onChange={this.props.onCheck.bind(this, this.props.id)} />
                    <div style={this.selectStyle()} onClick={this.props.multiSelect.bind(this, this.props.id)}>
                        <div style={name}>{this.props.name}</div>

                        <div style={date}>{this.props.date}</div>
                    </div>
                    <button style={deleteBtn} onClick={this.props.delItem.bind(this, this.props.id)}>X</button>
                </li>
            </div>
        )
        //Understand the use of bind() here
    }
}

const item = {
    backgroundColor: "#FAE3D9",
    borderRadius: "5px",
    padding: "8px",
    marginBottom: "10px",
}

const name = {
    display: 'inline-block',
}

const deleteBtn = {
    float: 'right',
}

const date = {
    fontSize: '10px'
}

