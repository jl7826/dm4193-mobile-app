import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Details = ({navigation}) => {
    return (
        <View>
            <Text>{navigation.getParam('item').details}</Text>
        </View>
    );
}

Details.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').name
})

export default Details;