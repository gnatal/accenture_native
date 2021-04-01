import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Modal, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview'

// import { useNavigation } from '@react-navigation/native';


//view => div

//status bar => barra de loading , espaço para loader

//react native webview => iframe'

export default function Details() {

    const [isOpen, setIsOpen] = useState(false);
    const [youtubeId, setYoutubeId] = useState('wxL8bVJhXCM');

    const navigation = useNavigation();

    function handleNextScreen() {
        navigation.navigate('Contact');
    }

    function handleModal(state: boolean) {
        setIsOpen(state);
    }

    return (
        <View style={style.container}>
            <Image source={require('../img/logoGama.png')}></Image>
            <View style={style.content}>
                <Pressable onPress={() => setIsOpen(!isOpen)}><Text style={style.title}>Meu Modal novo</Text></Pressable>
                {/* <Text style={style.paragraph}>Meu textinho de limão :3 para você meu limãozinho</Text> */}
                {/* <Text style={style.paragraph} onPress={handleNextScreen}>Acessar contato    </Text> */}

            </View>
            <Modal
                style={style.modal}
                animationType="slide"
                transparent={true}
                visible={isOpen}
                onRequestClose={() => {
                    alert('closing')
                    setIsOpen(false)
                }}

            >

                <View style={style.modalView}>
                    <View style={style.closeModalContainer}>
                        <Pressable style={style.buton} onPress={() => setIsOpen(false)} ><Text>x</Text></Pressable>
                        <Pressable onPress={() => setIsOpen(!isOpen)}><Text style={style.title}>Fechar</Text></Pressable>
                    </View>
                    <WebView
                        source={{ uri: 'https://www.youtube.com/watch?v=wxL8bVJhXCM' }}
                    />
                </View>
            </Modal>
        </View >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 3,
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 20,
        textAlign: 'center'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 40,

    },
    modalView: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 90,
    },
    closeModalContainer: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 6

    },
    buton: {
        width: 100,
    }
})