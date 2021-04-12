import React, {Component} from 'react';
import { View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const DetailsScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const Stack = createStackNavigator();

class Navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Stack.Navigator initialRouteName="Details">
                <Stack.Screen name="Reports" component={HomeScreen} selectPage={this.props.selectPage}/>
                <Stack.Screen name="Details" component={DetailsScreen} selectPage={this.props.selectPage}/>
            </Stack.Navigator>
        );
    }
}


export default Navigator;
