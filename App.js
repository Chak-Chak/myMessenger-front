import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { MainContainer } from './src/navigation/MainContainer';
import { store } from './src/store/mergeReducers';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" translucent={true} />
      <MainContainer styles={{ backgroundColor: "black" }} />
    </Provider>
  );
}