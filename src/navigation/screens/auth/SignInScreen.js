import { useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
    const signInHandler = () => {
        fetchSignIn(signInInfo)
    }
    return (
        <View style={[styles.modal, { flex: 1, alignItem: 'center', justifyContent: 'center' }]}>
            <Text style={[styles.headerText, { marginBottom: 30 }]}>Войти</Text>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 2, borderRadius: 20, borderColor: 'rgba(40, 0, 255, 1)', maxHeight: 60, marginBottom: 10, padding: 10 }}>
                <Text style={styles.defaultText}>email:</Text>
                <TextInput maxLength={20} style={styles.input} onChangeText={(e) => { setEmail(e) }}></TextInput>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 2, borderRadius: 20, borderColor: 'rgba(40, 0, 255, 1)', maxHeight: 60, marginBottom: 10, padding: 10 }}>
                <Text style={styles.defaultText}>пароль:</Text>
                <TextInput maxLength={20} secureTextEntry={true} style={styles.input} onChangeText={(e) => { setPassword(e) }}></TextInput>
            </View>
            <Button title="Вход" style={{ borderRadius: 40 }} onPress={() => signInHandler()}></Button>
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