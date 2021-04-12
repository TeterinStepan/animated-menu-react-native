import React, {useRef} from 'react';
import { StyleSheet, Animated } from "react-native";

import routes from 'configs/routes.json';
import Header from 'library/components/contents/typography/Header';
import NavVerticalMainList from 'containers/navigation/NavVerticalMainList';


const styles = StyleSheet.create({
    navSideBar: {
        paddingTop: 32,
        overflow: 'hidden'
    },
})

const NavigationSideBar = (props) => {
    const leftPosition = useRef(new Animated.Value(-200)).current;
    const width = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(leftPosition, {toValue: 32,duration: 200}).start();
        Animated.timing(width, {toValue: 250,duration: 200}).start();

    };
    const fadeOut = () => {
        Animated.timing(leftPosition, {toValue: -300, duration: 200}).start();
        Animated.timing(width, {toValue: 0,duration: 200}).start();
    };

    props.isActive ? fadeIn() : fadeOut();

    return  <Animated.View style={[{left: leftPosition, width: width}, styles.navSideBar]}>
                <Header type='H1' label='Навигация'/>
                <NavVerticalMainList list={routes} />
            </Animated.View>

}

export default NavigationSideBar;
