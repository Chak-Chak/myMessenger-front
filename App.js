import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect } from 'react';
import { Alert, AppState, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { COLORS } from './constans';
import { CustomButton } from './src/components/UI/button';
import { MainContainer } from './src/navigation/MainContainer';
import { store } from './src/store/mergeReducers';

export default function App() {

  let ws = null;

  useEffect(() => {
    ws = new WebSocket('ws://10.0.2.2:5194/ws');

    ws.onopen = () => {
      //ws.send('Connected');
      Alert.alert("Connection is opened...");
    };

    ws.onmessage = e => {
      console.log(e.data);
      Alert.alert("Recieved message: " + e.data);
    };

    ws.onerror = e => {
      console.log(e.message);
    };

    ws.onclose = e => {
      console.log(e.code, e.reason);
      Alert.alert("Connection is closed...");
    }
  }, [])

  const onPressHandker = () => {
    ws.send('GetConversations');
  }

  const appState = useRef(AppState.currentState);
  useEffect(() => {
    /*if (appState !== 'active') {
      doSomething();
    }*/
  }, [appState]);

  return (
    <Provider store={store}>
      <StatusBar style="light" translucent={true} />
      <View style={{ height: '100%', width: '100%', backgroundColor: 'black', justifyContent: "center" }}>
        <Text style={{ color: 'white', alignSelf: "center" }}>Hello</Text>
        <CustomButton label='Получить' backgroundColor={COLORS.secondary} style={{ height: 50 }} onPress={() => { onPressHandker() }} />
      </View>
      {/*<MainContainer styles={{ backgroundColor: "black" }} />*/}
    </Provider>
  );
}