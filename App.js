import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { MainContainer } from './src/navigation/MainContainer';
import { store } from './src/store/mergeReducers';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <MainContainer styles={{ backgroundColor: "black" }} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});