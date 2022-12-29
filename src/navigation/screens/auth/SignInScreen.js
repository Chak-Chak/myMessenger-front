import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CustomButton } from "../../../components/UI/button.js";
import { Input } from "../../../components/UI/input.js";
import {
    fetchSignIn,
    setEmail,
    setPassword
} from "../../../store/actions/signInActions.js";
import styles from "./SignInStyles.js";

const SignInScreenLayout = ({ signInInfo, setEmail, setPassword, fetchSignIn }) => {
    useEffect(() => {
        setEmail("");
        setPassword("");
    }, [])

    const [token, setToken] = useState('');

    const signInHandler = () => {
        fetchSignIn(signInInfo)
    }

    async function getAccessToken() {
        let result = await SecureStore.getItemAsync('accessToken');
        if (result) {
            setToken(result);
            //console.log(result);
        } else {
            Alert.alert('Токена не существует =(')
        }
    }

    async function getRefreshToken() {
        let result = await SecureStore.getItemAsync('refreshToken');
        if (result) {
            setToken(result);
        } else {
            Alert.alert('Токена не существует =(')
        }
    }


    return (
        <View style={[styles.modal]}>
            <Text style={[styles.headerText, { marginBottom: 30 }]}>Войти</Text>
            <View style={{ marginBottom: 15, width: '80%', alignSelf: 'center' }}>
                <Input label="email" maxLength={30} onChangeTextFunc={setEmail} />
            </View>
            <View style={{ marginBottom: 15, width: '80%', alignSelf: 'center' }}>
                <Input label="пароль" maxLength={30} onChangeTextFunc={setPassword} secureTextEntry={true} />
            </View>
            <View style={{ width: '80%', height: 50, alignSelf: 'center', alignItems: 'center' }}>
                {signInInfo.fetchSignInRunning ? <Ionicons name="battery-half-outline" size={50}></Ionicons> : <CustomButton label="Вход" fontSize={24} onPress={signInHandler} />}
            </View>
            <Text>{signInInfo.fetchSignInRunning}</Text>
        </View >
    )
};

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    return { signInInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { setEmail, setPassword, fetchSignIn },
        dispatch
    );

export const SignInScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreenLayout);