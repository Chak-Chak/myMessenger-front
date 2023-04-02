import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";
import { UpdateIsTokensExist } from "../../store/actions/signInActions";
import * as SecureStore from "expo-secure-store";
import { CustomButton } from "../../components/UI/button";
import { useEffect } from "react";

const DetailsScreenLayout = ({ navigation, UpdateIsTokensExist }) => {
    useEffect(() => {
        //console.log("ЗАГРУЗКА ДЕТАЛЕЙ");
    }, [])
    async function resetAccessToken() {
        await SecureStore.setItemAsync('accessToken', "");
        await SecureStore.setItemAsync('refreshToken', "");
        UpdateIsTokensExist(false);
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primary }}>
            <Text style={{ fontSize: 24, color: COLORS.white }}>Details Screen</Text>
            <View style={{ width: '80%', height: 50, alignSelf: 'center', alignItems: 'center', marginBottom: 10 }}>
                <CustomButton label="Выйти" fontSize={24} onPress={resetAccessToken} backgroundColor={COLORS.secondary} style={{ width: 100 }} />
            </View>
        </View>
    )
};

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    return { signInInfo };
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