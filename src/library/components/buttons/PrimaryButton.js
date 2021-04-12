import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    button: {
        padding: '19px',
        minHeight:  '22px',
        color: 'white',
        backgroundColor: '#6474aa'
    },
    text: {
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '22px',
        alignSelf: 'center',
        color: '#fff'
    }
});

export const PrimaryButton = (props) => {
    const { title = 'Enter', buttonStyle = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
};


