import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Item from "./Item"

export default function List({items, onCheck}) {
    return items.map((item)=>(
        <Item 
            key={item.id} 
            item={item}
            onCheck={onCheck}
        />
    ))
}

