import { useEffect } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";
import { fetchGetMyConversations } from "../../store/actions/conversationsActions";
import * as SecureStore from "expo-secure-store";

const MessageScreenLayout = ({ navigation, fetchGetMyConversations }) => {
    async function getAccessToken() {
        let access = await SecureStore.getItemAsync('accessToken');
        return access;
    }

    useEffect(() => {
        console.log("ЗАГРУЗКА СООБЩЕНИЙ");
        getAccessToken().then((value) => fetchGetMyConversations({ accessToken: value }));
    }, [])

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primary }}>
            <Text style={{ fontSize: 24, color: COLORS.white }}>Messages Screen</Text>
        </View>
    )
};

const mapStateToProps = (state) => {
    const conversationsReducer = state.conversationsReducer;
    return { conversationsReducer };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { fetchGetMyConversations },
        dispatch
    );

export const MessagesScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageScreenLayout);