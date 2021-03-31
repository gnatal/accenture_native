import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Animated,
    Image, SafeAreaView, StyleSheet, Text, View
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler'




//view => div

//status bar => barra de loading , espaço para loader


// onPress => onClick


export default function Home() {

    const fade = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            fade,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }

    // useEffect(() => {
    //     Animated.timing(
    //         fade,
    //         {
    //             toValue: 1,
    //             duration: 1000,
    //             useNativeDriver: true,
    //         }
    //     ).start();
    // }, [fade])

    const navigation = useNavigation();


    function openNewScreen(screen: string) {
        navigation.navigate(screen)
    }


    //animated view => style => initial, final

    //image => src={require()} without width, height get image original size

    return (

        <SafeAreaView style={styles.container}>
            <Animated.View style={[
                styles.fadeInStyle,
                {
                    opacity: fade // Bind opacity to animated value
                }
            ]}
            >
                <Text style={styles.text} >Home</Text>
                <Image source={require('../img/logoGama.png')} />

            </Animated.View>
            <View>
                <RectButton onPress={() => openNewScreen('Home')}><Text>Home</Text></RectButton>
                <RectButton onPress={() => openNewScreen('Details')}><Text>Detalhes</Text></RectButton>
                <RectButton onPress={fadeIn}><Text>Animação</Text></RectButton>
            </View>
        </SafeAreaView >
    )
}

//o display vem como flex por padrao
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#808080"
    },
    fadeInStyle: {
        opacity: 1

    },
    text: {
        color: "#fff",
        fontSize: 22
    }
})