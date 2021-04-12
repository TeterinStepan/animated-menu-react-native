import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Navigator from "screens/root/Navigator"
import NavigationSideBar from 'screens/root/NavigationSideBar';

import colors from 'res/colors';

import {NavigationContainer} from '@react-navigation/native';
import NavBar from 'library/containers/NavBar';
import ContentView from 'screens/root/ContentView';

import { useNavigation } from '@react-navigation/native';

class App extends Component {
    constructor(props) {
        super(props);
        this.initialPageID = 2;
        this.state = {
            theme: colors.night,
            menuIsOpen: false,
            selectedPageID: 0
        };
    }

    selectPage = (pageID) => {
        this.setState({
            menuIsOpen: pageID === 0,
            selectedPageID: 0
        })
    }

    render() {
        return (
            <NavigationContainer>
                <View style={styles.appContainer}>
                    <NavigationSideBar isActive={this.state.menuIsOpen} />
                    <ContentView isActive={!this.state.menuIsOpen} >
                        <Navigator style={{backgroundColor: this.state.theme.faint.weak}}/>
                        <NavBar selectPage={this.selectPage} selectedPageID={this.initialPageID}/>
                    </ContentView>
                </View>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        overflow: 'hidden'
    }
});

export default App;
