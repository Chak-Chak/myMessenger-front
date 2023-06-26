import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS, SCREEN_NAMES } from "../../../constans";
import * as SecureStore from "expo-secure-store";
import styles from "./ConversationsScreenStyles.js";
import { MessagesScreen } from "./MessagesScreen";
import { fetchGetMyConversations, UpdateActiveConversationId, UpdateSenderId, UpdateReceiverId } from "../../store/actions/conversationsActions";
import { Conversation } from "../../components/UI/conversation";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { RefreshControl } from 'react-native'


const ConversationsScreenLayout = ({ route, navigation, fetchGetMyConversations, conversationsInfo, UpdateActiveConversationId, UpdateSenderId, UpdateReceiverId, myInfo }) => {
    async function getAccessToken() {
        let access = await SecureStore.getItemAsync('accessToken');
        return access;
    }

    useEffect(() => {
        getAccessToken().then((value) => fetchGetMyConversations({ accessToken: value }));
    }, [])

    const GetReceiverId = (list) => {
        let tempList = [];
        list.map((item) => {
            if (item.userData.id !== myInfo.info.id) tempList.push(item.userData.id);
        });
        return tempList;
    }

    const GetUserInfoForDirectMessages = (data) => {
        let userData = {};
        data.conversationMembers.map((element) => {
            if (element.userData.id !== myInfo.info.id) userData = element.userData;
        })
        return userData;
    }

    const ItemView = ({ item }) => {
        const userData = GetUserInfoForDirectMessages(item);
        return (
            <Conversation key={item.id} data={item} userData={userData} onPress={() => {
                UpdateActiveConversationId(item.id);
                UpdateSenderId(myInfo.info.id);
                UpdateReceiverId(GetReceiverId(item.conversationMembers));
                navigation.navigate(SCREEN_NAMES.messagesScreenName, { conversationId: item.id, userData: userData })
            }} />
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                }}
            />
        );
    };

    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const onRefresh = () => {
        getAccessToken().then((value) => fetchGetMyConversations({ accessToken: value }));
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primary }}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 24, color: COLORS.white, alignSelf: 'center' }}>Чаты</Text>
                </View>
                <FlatList
                    data={conversationsInfo.conversationsList}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    enableEmptySections={true}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl
                            refreshing={conversationsInfo.fetchGetconversationsIsRunning}
                            onRefresh={onRefresh}
                        />
                    }
                />
                {/*<ScrollView>
                    <View style={styles.body}>
                        {conversationsInfo.conversationsList && conversationsInfo.conversationsList.map(item => {
                            const userData = GetUserInfoForDirectMessages(item);
                            return (
                                <Conversation key={item.id} data={item} userData={userData} onPress={() => {
                                    UpdateActiveConversationId(item.id);
                                    UpdateSenderId(myInfo.info.id);
                                    UpdateReceiverId(GetReceiverId(item.conversationMembers));
                                    navigation.navigate(SCREEN_NAMES.messagesScreenName, { conversationId: item.id, userData: userData })
                                }} />
                            )
                        })
                        }
                    </View>
                    </ScrollView>*/}
            </View>
        </View >
    )
}

const mapStateToProps = (state) => {
    const conversationsInfo = state.conversationsReducer;
    const myInfo = state.myInfoReducer;
    return { conversationsInfo, myInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { fetchGetMyConversations, UpdateActiveConversationId, UpdateSenderId, UpdateReceiverId },
        dispatch
    );

export const ConversationsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationsScreenLayout);

