import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";
import { UpdateIsTokensExist } from "../../store/actions/signInActions";
import * as SecureStore from "expo-secure-store";
import { CustomButton } from "../../components/UI/button";
import { useEffect } from "react";
import { useState } from "react";
import { log } from "react-native-reanimated";

const DetailsScreenLayout = ({ myInfo, navigation, UpdateIsTokensExist }) => {
    useEffect(() => {
        //console.log(myInfo.info);
        DateProcessing();
    }, [])

    const DateProcessing = () => {
        let tempDate = new Date(myInfo.info.createdOn);
        //let options = { month: '2-digit' };
        //let mo = tempDate.format('dd.mm.yyyy');
        setDate(`${tempDate.getDate()}.${tempDate.getMonth()}.${tempDate.getFullYear()}`);
    }

    async function resetAccessToken() {
        await SecureStore.setItemAsync('accessToken', "");
        await SecureStore.setItemAsync('refreshToken', "");
        UpdateIsTokensExist(false);
    }

    const [date, setDate] = useState('');

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primary }}>
            <Text style={{ fontSize: 24, color: COLORS.white, paddingBottom: 10 }}>Имя: {myInfo.info.name}</Text>
            <Text style={{ fontSize: 24, color: COLORS.white, paddingBottom: 10 }}>Почта: {myInfo.info.email}</Text>
            <Text style={{ fontSize: 24, color: COLORS.white, paddingBottom: 10 }}>{date}</Text>
            <View style={{ width: '80%', height: 50, alignSelf: 'center', alignItems: 'center', marginBottom: 10 }}>
                <CustomButton label="Выйти" fontSize={24} onPress={resetAccessToken} backgroundColor={COLORS.secondary} style={{ width: 100 }} />
            </View>
        </View>
    )
};

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    const myInfo = state.myInfoReducer;
    return { myInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { UpdateIsTokensExist },
        dispatch
    );

export const DetailsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsScreenLayout);