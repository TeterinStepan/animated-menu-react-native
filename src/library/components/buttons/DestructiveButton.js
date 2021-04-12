import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    button: {
        height:  48,
        width: 230,
    },
    text: {
        fontSize: 17,
        lineHeight: 27.5,
        fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
		alignSelf: 'center',
        color: "#333333",
    }
});

export const DestructiveButton = (props) => {
    const { title = 'Enter', buttonStyle = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
};