import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const FlatItem = ({item}) => {
    return (
        <SafeAreaView style = {styles.body}>
            <Image
                style = {
                    [
                        styles.image
                    ]
                } 
                source={item.image}
            />

            <Text style = {styles.text}>{item.title}</Text>
        </SafeAreaView>
    )
}

export default FlatItem;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },

    text: {
        height:350,
        width: 250,
        borderRadius: 10,
        marginLeft: 10,
        backgroundColor: '#000000',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 30,
        borderWidth: 5,
        borderLeftColor: '#FF0000',
        borderStyle: 'dotted',
    },
});
