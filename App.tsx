import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Route from './src/routes'

export default function App() {
  return (
    <Route />
  );
}


//splash screen -> tela de carregamento do App

//tamanho de pixel numero
// outros parametros => string
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68de5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDefault: {
    color: "#fff",
    fontSize: 22,
  }
});
