import React, {useRef} from 'react';
import { StyleSheet, View, Image, Animated } from "react-native";

import colors from 'res/colors';

const styles = StyleSheet.create({

    activeLabel: {
        fontSize: 0,
        height: 0
    },
    icon: {
        marginVertical: 4,
        borderRadius: 30,
        marginHorizontal: 'auto',
        backgroundColor: colors.day.base.weak,
    },
    label: {
        color: colors.day.faint.strong,
        textAlign: 'center',
    }
})

const NavCircleButton = (item) => {
    const sizeAnim = useRef(new Animated.Value(40)).current;

    let fadeIn = () => {
        Animated.timing(sizeAnim, {
            toValue: 48,
            duration: 200
        }).start();
    };
    let fadeOut = () => {
        Animated.timing(sizeAnim, {
            toValue: 40,
            duration: 200
        }).start();
    };

    item.id === item.selectedPageID ? fadeIn(): fadeOut();

    return (
        <View onClick={() => item.onClick(item)} >
            <Animated.Image style={[styles.icon, { height: sizeAnim, width: sizeAnim }]}/>
        </View>
    )
}
export default NavCircleButton;
