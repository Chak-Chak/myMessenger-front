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
import { MessagesScreen } from "./screens/MessagesScreen";
import { SignInScreen } from "./screens/auth/SignInScreen";
import { COLORS } from "../../constans";

// Screen names
const detailsName = 'Другое';
const messagesName = 'Сообщения';

const Tab = createBottomTabNavigator();

export const MainContainerLayout = ({ signInInfo, UpdateIsTokensExist }) => {
    useEffect(() => {
        CheckTokens();
    }, [signInInfo.isTokensExist])

    async function CheckTokens() {
        let tempTokenExist = true;
        let access = await SecureStore.getItemAsync('accessToken');
        let refresh = await SecureStore.getItemAsync('refreshToken');
        if (!access) tempTokenExist = false;
        if (!refresh) tempTokenExist = false;
        UpdateIsTokensExist(tempTokenExist);
        //console.log(signInInfo.isTokensExist);
    }

    return (
        <>
            {signInInfo.isTokensExist ?
                < NavigationContainer >
                    <Tab.Navigator
                        initialRouteName={messagesName}
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                let rn = route.name;

                                if (rn === messagesName) {
                                    iconName = focused ? 'mail-outline' : 'mail-outline';
                                } else if (rn === detailsName) {
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

                        <Tab.Screen name={messagesName} component={MessagesScreen} />
                        <Tab.Screen name={detailsName} component={DetailsScreen} />
                    </Tab.Navigator >
                </NavigationContainer > : <SignInScreen />}
        </>
    )
}

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    return { signInInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { UpdateIsTokensExist },
        dispatch
    );

export const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainerLayout);