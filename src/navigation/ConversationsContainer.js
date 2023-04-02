import { createStackNavigator } from "@react-navigation/stack";
import { ConversationsScreen } from "./screens/ConversationsScreen";
import { MessagesScreen } from "./screens/MessagesScreen";
import { Button, Text, View } from "react-native";
import { COLORS, SCREEN_NAMES, TAB_HIDDEN_SCREEN_NAMES } from "../../constans";
import { useEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";



const Stack = createStackNavigator();

const ChatsListScreen = ({ navigation, route }) => {
    return (
        <ConversationsScreen navigation={navigation} route={route} />
    );
}

const ChatScreen = ({ navigation, route }) => {
    return (
        <MessagesScreen navigation={navigation} route={route} />
    );
}

export const ConversationsContainer = ({ navigation, route }) => {
    useEffect(() => {
        if (TAB_HIDDEN_SCREEN_NAMES.tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: 'flex', height: 50, backgroundColor: COLORS.primary, borderTopWidth: 0 } });
        }
    }, [route]) //Disable tab bar on some pages

    return (
        <Stack.Navigator initialRouteName={SCREEN_NAMES.conversationsScreenName} >
            <Stack.Screen name={SCREEN_NAMES.conversationsScreenName} component={ChatsListScreen} options={{ headerShown: false, }} />
            <Stack.Screen name={SCREEN_NAMES.messagesScreenName} component={ChatScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
};


/*const mapStateToProps = (state) => {
    const conversationsInfo = state.conversationsReducer;
    return { conversationsInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { fetchGetMyConversations },
        dispatch
    );

export const ConversationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationsContainerLayout);*/