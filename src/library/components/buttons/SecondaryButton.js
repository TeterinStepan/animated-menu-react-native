import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    button: {
        padding: '19px',
        minHeight:  '22px',
    },
    text: {
		fontSize: '18px',
        fontWeight: '500',
        lineHeight: '22px',
		alignSelf: 'center',
		color: "#1540a0",
    }
});

export const SecondaryButton = (props) => {
    const { title = 'Enter', buttonStyle = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
};

