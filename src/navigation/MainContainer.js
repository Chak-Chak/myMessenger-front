import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import { DetailsScreen } from "./screens/DetailsScreen";
import { MessagesScreen } from "./screens/MessagesScreen";

// Screen names
const detailsName = 'Другое';
const messagesName = 'Сообщения';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
    return (
        <NavigationContainer>
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
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { fontSize: 10, paddingBottom: 0, paddingTop: 0, margin: 0 },
                    tabBarStyle: { height: 50 },
                    tabBarShowLabel: true,
                    headerShown: false,
                })}
            >

                <Tab.Screen name={messagesName} component={MessagesScreen} />
                <Tab.Screen name={detailsName} component={DetailsScreen} />

            </Tab.Navigator >
        </NavigationContainer >
    )
}