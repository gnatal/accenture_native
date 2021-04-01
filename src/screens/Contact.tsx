import React, { useState, useEffect, useCallback } from 'react'
import {
    View, Text, StyleSheet, Dimensions, Platform,
    TextInput, TextInputChangeEventData,

    Image,
    KeyboardAvoidingView
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';


//scroll view vs safe area view;

//scroll view => there is an IOS component that's better
// keyboardavoidview  => do not allow keyboard to go over the form


import { sendContact } from '../service';
//Platform get your application system

//lottie needs a style to work

interface IPostData {
    name: string,
    email: string,
    phone: string

}

export default function Contact() {

    const navigation = useNavigation();
    const [isSendMessage, setIsSendMessage] = useState(false);
    const [postData, setPostData] = useState<IPostData>({ name: '', email: '', phone: '' });

    // useEffect(() => {
    //     sendContact.post('').then(res => res.data);
    // },[])

    const handleSendInfo = useCallback(() => {
        // const postData = {
        //     name,
        //     email,
        //     phone
        // }
        sendContact.post('', postData).then(
            response => {
                setIsSendMessage(true)
            }
        ).catch(err => alert("erro no enveio"))
    }, [postData]
    )

    // function handleSendInfo() {
    //     setIsSendingMessage(true);
    //     try {
    //         const response = await sendContact.post('', { name, email, phone });
    //     } catch (e) {
    //         alert(e)
    //     } finally {
    //         setIsSendingMessage(false);
    //     }
    // }

    function backToHome() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={style.scrollViewContainer} scrollEnabled={true}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={1000}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                {
                    isSendMessage ? (
                        <View style={style.container}>
                            <LottieView
                                style={style.animation}
                                source={require('../animation/lf30_editor_sokikrzl.json')}
                                autoPlay
                                loop
                            />
                            <RectButton style={style.sendButton} onPress={navigation.goBack}>
                                <Text style={style.textSendButton}>Voltar</Text>
                            </RectButton>
                        </View>
                    )
                        : (
                            <View style={style.container}>
                                <Image source={require('../img/logoGama.png')} />

                                <Text>Name: </Text>
                                <TextInput style={style.input} value={postData?.name} onChangeText={(text) => setPostData({ ...postData, name: text })}></TextInput>
                                <Text>Email: </Text>
                                <TextInput style={style.input} value={postData?.email} onChangeText={(text) => setPostData({ ...postData, email: text })}></TextInput>
                                <Text>Phone: </Text>

                                <TextInput style={style.input} value={postData?.phone} onChangeText={(text) => setPostData({ ...postData, phone: text })}></TextInput>
                                <RectButton style={style.sendButton} onPress={handleSendInfo}>
                                    <Text style={style.textSendButton}>Enviar email</Text>
                                </RectButton>
                            </View>
                        )
                }

            </KeyboardAvoidingView>
        </ScrollView>
    )
}


//

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewContainer: {
        width: Dimensions.get('window').width,
    },
    animation: {
        width: 300,
        height: 300
    },
    input: {
        paddingHorizontal: 20,
        height: 50,
        width: Dimensions.get('window').width - 60,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 12,
        marginVertical: 10,
    },
    sendButton: {
        marginTop: 40,
        backgroundColor: "#68de5a",
        width: Dimensions.get('window').width - 100,
        height: 40,
        borderRadius: 22,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textSendButton: {
        fontSize: 20,
        color: "#fff",
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})