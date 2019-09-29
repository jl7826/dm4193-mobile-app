import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },

    delBtn: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: "red",
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },

})

export default class TodoItem extends Component {

    constructor(props){
        super(props)
        this.onItemPress = this.onItemPress.bind(this)
    }

    onItemPress(){
        this.props.toDetails(this.props.item)
    }

    checkboxStyle = () => {
        return {
            width: 20,
            height: 20,
            borderColor: "black",
            borderWidth: 0.5,
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: this.props.item.completed ? "gray" : "white"
        }
    }

    nameStyle = () => {
        return {
            fontSize: 20,
            textDecorationLine: this.props.item.completed ? "line-through" : "none",
        }
    }

    selectStyle = () => {
        return {
            flex: 1,
            backgroundColor: this.props.item.selected ? "#f4f4f4" : "white",
        }
    }

    render() {
        const { id, name, addDate } = this.props.item
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={this.checkboxStyle()}
                    onPress={this.props.onCheck.bind(this, id)}
                />

                <TouchableOpacity 
                    onPress = {this.onItemPress}
                    // onPress={this.props.multiSelect.bind(this, id)}
                    style={this.selectStyle()}>
                    <Text style={this.nameStyle()}>{name}</Text>
                    <Text>{addDate}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.props.delItem.bind(this, id)}
                    style={styles.delBtn}>
                    <Text style={{ color: "white", fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

