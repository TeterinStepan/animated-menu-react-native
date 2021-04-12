import React from "react";
import { FlatList,  StyleSheet, View} from "react-native";

import NavVerticalMainList from "./NavVerticalMainList";
// import ListGroupTitle from 'library/components/contents/typography/lists/ListGroupTitle';
import colors from 'res/colors';

const styles = StyleSheet.create({
    nestedList: {
        flexDirection: "row",
        marginBottom: 16,
        marginTop: 8
    },
    nestedListBorder: {
        backgroundColor: colors.day.faint.weak,
        borderRadius: 2,
        width: 4,
        marginLeft: 7
    },
    nestedListContent: {
        marginLeft: 18,
    },
    styleLabel: {
        color: colors.day.accent.strong
    }
});

const NavVerticalSubList = (props) => {
    const list = props.list;
    const haveSubList = props.list && props.list.length > 0;

    const renderItem = ({ item }) => (
        <View styles={props.style}>
            {/* <ListGroupTitle item = {item} /> */}
            <NavVerticalMainList list={item.list} typeLabel='SmallNormal' styleLabel={styles.styleLabel}/>
        </View>
    );
    if(haveSubList){
        return (
            <View style={styles.nestedList}>
                <View style={styles.nestedListBorder}/>
                <FlatList
                    style={styles.nestedListContent}
                    data={list}
                    renderItem={renderItem}
                    labelExtractor={item => item.link}
                />
            </View>
        )
    } else {
        return <></>
    }

}
export default NavVerticalSubList;
