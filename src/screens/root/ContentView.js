import React, {useRef} from 'react';
import { StyleSheet, Animated } from "react-native";
import colors from 'res/colors';

const styles = StyleSheet.create({
    contentView: {
        width: '100%',
        height: '100%',
        marginVertical: 64,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.day.faint.weak,
        overflow: 'hidden',
        boxShadow: '0px 5px 8px rgba(112, 102, 255, 0.1), 0px 10px 16px rgba(233, 236, 245, 0.2), 0px 15px 24px rgba(233, 236, 245, 0.3), 0px 40px 64px rgba(233, 236, 245, 0.8)'
    },
})

const ContentView = (props) => {
    const topPosition = useRef(new Animated.Value(0)).current;
    const leftPosition = useRef(new Animated.Value(0)).current;
    const borderRadius = useRef(new Animated.Value(0)).current;

    const squeeze = () => {
        Animated.timing(topPosition, {toValue: 64,duration: 150}).start();
        Animated.timing(leftPosition, {toValue: 12, duration: 300}).start();
        Animated.timing(borderRadius, {toValue: 24,duration: 200}).start();
    };
    const stretchOut = () => {
        Animated.timing(topPosition, {toValue: 0,duration: 150}).start();
        Animated.timing(leftPosition, {toValue: 0,duration: 300}).start();
        Animated.timing(borderRadius, {toValue: 0,duration: 200}).start();
    };

    props.isActive ? stretchOut() : squeeze();

    return <Animated.View
        style={
            [
                {
                    marginLeft: leftPosition,
                    marginTop: topPosition,
                    borderRadius: borderRadius,
                },
                styles.contentView
            ]
        }>
        {props.children}
    </Animated.View>

}
export default ContentView;
