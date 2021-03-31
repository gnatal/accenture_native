import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Dimensions, Platform, TextInput, TextInputChangeEventData } from 'react-native'

import { sendContact } from '../service';

import LottieView from 'lottie-react-native'
import { RectButton } from 'react-native-gesture-handler';

//Platform get your application system

//lottie needs a style to work

export default function Contact() {

    const [isSendMessage, setIsSendMessage] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // useEffect(() => {
    //     sendContact.post('').then(res => res.data);
    // },[])

    const handleSendInfo = useCallback(() => {
        const postData = {
            name,
            email,
            phone
        }
        sendContact.post('', postData).then(
            response => {
                setIsSendMessage(true)
            }
        ).catch(err => alert("erro no enveio"))
    }, [name, email, phone]
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

    return (
        <View style={style.container}>
            {
                isSendMessage ? (
                    <LottieView
                        style={style.animation}
                        source={require('../animation/lottieAntigo.json')}
                        autoPlay
                        loop
                    />)
                    : (
                        <View>
                            <Text>Name: </Text>
                            <TextInput style={style.input} value={name} onChangeText={(text) => setName(text)}></TextInput>
                            <Text>Email: </Text>
                            <TextInput style={style.input} value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                            <Text>Phone: </Text>
                            <TextInput style={style.input} value={phone} onChangeText={(text) => setPhone(text)}></TextInput>
                        </View>
                    )
            }

            <RectButton style={style.sendButton} onPress={handleSendInfo}>
                <Text style={style.textSendButton}>Enviar email</Text>
            </RectButton>
        </View>
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
    }
})