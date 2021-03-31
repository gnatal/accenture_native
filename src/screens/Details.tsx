import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//view => div

//status bar => barra de loading , espaço para loader

export default function Details() {

    const navigation = useNavigation();

    function handleNextScreen() {
        navigation.navigate('Contact');
    }

    return (
        <View>
            <Text onPress={handleNextScreen}>Acessar contato    </Text>
        </View>
    )
}