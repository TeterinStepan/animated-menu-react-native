import {BlurView} from 'expo-blur';
import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";

import NavCircleButton from 'library/components/buttons/NavCircleButton';

import colors from 'res/colors';
import navBarRoutes from 'configs/navBarRoutes.json';


class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPageID: props.selectedPageID
        };
    }

    selectItem = (item) => {
        this.props.selectPage(item.id);
        this.setState({ selectedPageID: item.id })
    }

    render() {
        return (
            <View style={[styles.navBarContainer, this.props.style]}>
                <BlurView style={styles.navBar} intensity={27}>
                    <View style={styles.colorFilter}>{
                            navBarRoutes.map( item => (
                                <NavCircleButton
                                    id={item.id}
                                    link={item.link}
                                    label={item.label}
                                    selectedPageID={this.state.selectedPageID}
                                    onClick={() => this.selectItem(item)}
                                />
                            ))
                    }</View>
                </BlurView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    navBarContainer: {
        position: 'fixed',
        width: '100%',
        bottom: 12,
        maxWidth: 440
    },
    navBar: {
        flex: 1,
        bottom: 24,
        borderRadius: 16,
        overflow: 'hidden',
        marginHorizontal: 24,
        border: colors.day.faint.weak,
    },
    colorFilter: {
        flex: 1,
        minHeight: 68,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: colors.day.faint.weak,
    }
});

export default NavBar;
