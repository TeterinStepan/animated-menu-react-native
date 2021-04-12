import React, {Component} from 'react';
import { FlatList, ScrollView, View, Text} from "react-native";

import NavVerticalSubList from './NavVerticalSubList';
import Header from '../../library/components/contents/typography/Header';



class NavVerticalMainList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            openedItems: [],
            listStyle: this.props.listStyle
        };
    }

    renderItem = ({ item }) => (
        <Header type='Normal' label={item.label}></Header>
    );

    render() {
        console.log(this.state.list);
        return(
            <ScrollView style={{}}>
                <FlatList
                    style={this.state.listStyle}
                    data={this.state.list}
                    renderItem={this.renderItem}
                    labelExtractor={item => item.link}
                />
            </ScrollView>
        );
    }
}

export default NavVerticalMainList;
