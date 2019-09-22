import { StyleSheet, Text, View} from 'react-native'
import CheckBox from 'react-native-check-box'

import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const { id, name, addDate, completed} = this.props.item

        return (
            <View style={styles.container}>
                {/* <CheckBox
                    style={styles.checkbox}
                    onClick={() => { 
                        this.props.onCheck.bind(this, id) 
                    }}
                    isChecked={completed}
                /> */}

                <View style={styles.text}>
                    <Text style={styles.textTitle}>{name}</Text>
                    <Text>{addDate}</Text>
                </View>

                <Text style={styles.button}>  X</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "yellow",
        borderRadius: 10,
        margin: 5,
        padding: 10,
        alignItems: "center",
    },

    checkbox: {
        flex: 1
    },

    text: {
        flex: 10,
        paddingHorizontal: 5,
    },

    textTitle: {
        fontSize: 24,
    },

    // textDate: {

    // }

    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontWeight: "bold",
        backgroundColor: "white",
    }
})

