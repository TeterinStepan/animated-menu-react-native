import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class Main extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.leftNavBarTree}>
                    <View style={styles.userPreview}>
                        <Image styles={styles.circleImage}></Image>
                        <View styles={styles.userInfo}>
                            <Text styles={styles.h3}>Фамилия Имя Отчество</Text>
                            <Text styles={styles.paraghraf}>Должность</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <View>Аналитика</View>
                    <View>Расписание</View>
                    <View>Клиенты</View>
                    <View>Сотрудники</View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "dimgray",
        flex: 1
    },
    leftNavBarTree: {

    }
});

export default Main;
