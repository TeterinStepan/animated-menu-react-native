import React from "react";
import { Text } from "react-native";
import styles from 'res/styles';
import colors from 'res/colors';

const Header = (props) => {
    let initialStyle = styles.typography[props.type];
    let customStyle = props.style ? props.style : {};
    return (
        <Text style={[initialStyle, {color: colors.day.base.strong}, customStyle]}>{props.label}</Text>     
    );
}


export default Header;
