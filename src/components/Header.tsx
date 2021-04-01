import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

//different click effect

interface IProps {
    title: string,
    showCancel?: boolean
}

export default function HeaderComponent({ title, showCancel = true }: IProps) {
    const navigation = useNavigation();

    function handleReturnToHome() {
        navigation.navigate('Home')
    }



    return (
        <View style={styles.headerStyle}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name={"arrow-left"} size={20} color={'#333'} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {showCancel ?
                <BorderlessButton onPress={handleReturnToHome}>
                    <Feather name={"x"} size={20} color={'#333'} />
                </BorderlessButton> : (<View></View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        padding: 24,
        backgroundColor: "#68de5a",
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingTop: 44, // magic kkk
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: "#fff"
    }
})