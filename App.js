import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { MainContainer } from './src/navigation/MainContainer';
import { SignInScreen } from './src/navigation/screens/auth/SignInScreen';
import { store } from './src/store/mergeReducers';

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      {1 > 0 ? <SignInScreen /> : <MainContainer />}
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
