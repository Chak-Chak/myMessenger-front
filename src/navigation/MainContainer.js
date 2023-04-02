import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UpdateIsTokensExist } from "../store/actions/signInActions";
import * as SecureStore from "expo-secure-store";
// Screens
import { DetailsScreen } from "./screens/DetailsScreen";
import { SignInScreen } from "./screens/auth/SignInScreen";
import { COLORS, TAB_NAMES } from "../../constans";
import { ConversationsContainer } from "./ConversationsContainer";
import { fetchGetMyInfo } from "../store/actions/myInfoAction";

const Tab = createBottomTabNavigator();

export const MainContainerLayout = ({ conv, signInInfo, UpdateIsTokensExist, fetchGetMyInfo }) => {
    useEffect(() => {
        CheckTokens();
        if (signInInfo.isTokensExist) {
            getAccessToken().then((value) => fetchGetMyInfo({ accessToken: value }));
        }
    }, [signInInfo.isTokensExist])

    /*useEffect(() => {
        console.log("Id: ", conv.activeConversationId, " SenderId: ", conv.senderId, " ReceiverId: ", conv.receiverId);
    })*/ //DEBUG CONSOLE LOG

    async function getAccessToken() {
        let access = await SecureStore.getItemAsync('accessToken');
        return access;
    }

    async function CheckTokens() {
        let tempTokenExist = true;
        let access = await SecureStore.getItemAsync('accessToken');
        let refresh = await SecureStore.getItemAsync('refreshToken');
        if (!access) tempTokenExist = false;
        if (!refresh) tempTokenExist = false;
        UpdateIsTokensExist(tempTokenExist);
    }

    return (
        <>
            {signInInfo.isTokensExist ?
                < NavigationContainer >
                    <Tab.Navigator
                        initialRouteName={TAB_NAMES.conversationsTabName}
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                let rn = route.name;

                                if (rn === TAB_NAMES.conversationsTabName) {
                                    iconName = focused ? 'mail-outline' : 'mail-outline';
                                } else if (rn === TAB_NAMES.detailsTabName) {
                                    iconName = focused ? 'list-outline' : 'list-outline';
                                }

                                return <Ionicons name={iconName} size={size} color={color} />
                            },
                            tabBarActiveTintColor: COLORS.secondary,
                            tabBarInactiveTintColor: COLORS.lightGray,
                            tabBarLabelStyle: { fontSize: 10, paddingBottom: 0, paddingTop: 0, margin: 0 },
                            tabBarStyle: { height: 50, backgroundColor: COLORS.primary, borderTopWidth: 0 },
                            tabBarShowLabel: true,
                            headerShown: false,
                        })}
                    >

                        <Tab.Screen name={TAB_NAMES.conversationsTabName} component={ConversationsContainer} />
                        <Tab.Screen name={TAB_NAMES.detailsTabName} component={DetailsScreen} />
                    </Tab.Navigator >
                </NavigationContainer > : <SignInScreen />}
        </>
    )
}

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    const conv = state.conversationsReducer;
    return { signInInfo, conv };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { UpdateIsTokensExist, fetchGetMyInfo },
        dispatch
    );

export const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainerLayout);