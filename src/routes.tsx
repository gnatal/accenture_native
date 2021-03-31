import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';

import HeaderComponent from './components/Header'
import Contact from './screens/Contact';

const { Navigator, Screen } = createStackNavigator();
// navigator  => react-router switch

// now it's native

//screen name => route  path

//navigator é a barra de cima headerShow => false, tira a barra

export default function Route() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={'home'} screenOptions={{ headerShown: true, cardStyle: { backgroundColor: "#f2f2f2" } }}>

                <Screen name={'Home'} component={Home} />
                <Screen name={'Details'} component={Details} options={{ headerShown: true, header: () => <HeaderComponent title={"Details"} showCancel={true} /> }} />
                <Screen name={'Contact'} component={Contact} options={{ headerShown: true, header: () => <HeaderComponent title={"Contact"} showCancel={false} /> }} />
            </Navigator>
        </NavigationContainer>
    );
}