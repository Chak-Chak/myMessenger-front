import { useEffect } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";
import { CustomButton } from "../../components/UI/button";
import { fetchGetConversationMessages, UpdateConversationMessagesList } from "../../store/actions/conversationsActions";
import ConvStyles from "./ConversationsScreenStyles.js";
import * as SecureStore from "expo-secure-store";
import { Input } from "../../components/UI/input";
import { useState } from "react";
import { Message } from "../../components/UI/message";
import { FetchSendingMessage } from "../../store/actions/messagesActions";

const url = 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg'; //Temp image

const MessagesScreenLayout = ({ route, navigation, fetchGetConversationMessages, UpdateConversationMessagesList, conversationInfo, FetchSendingMessage }) => {
    const conversationId = route.params.conversationId;
    const userData = route.params.userData;

    async function getAccessToken() {
        let access = await SecureStore.getItemAsync('accessToken');
        return access;
    }

    const [message, setMessage] = useState("");
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        getAccessToken().then((value) => {
            setAccessToken(value);
            fetchGetConversationMessages({ accessToken: value, conversationId: conversationId });
        })
    }, [])

    const SendingMessageHandler = () => {
        if (accessToken === "") getAccessToken().then((accessToken) => setAccessToken(accessToken));
        let isMessageEmpty = false;
        if (message.trim() === '') isMessageEmpty = true;
        if (!isMessageEmpty) FetchSendingMessage({ accessToken: accessToken, messageText: message, conversationId: conversationId });
        setMessage("");
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primary }}>
            <View style={ConvStyles.wrapper}>
                <View style={ConvStyles.header}>
                    <CustomButton backgroundColor={COLORS.primary} fontSize={18} onPress={() => { navigation.goBack(); UpdateConversationMessagesList([]); }} label='<---' style={{ width: 40, marginRight: 5 }} />
                    <View style={styles.image_wrapper}>
                        <Image source={{ uri: url }} style={styles.image} />
                    </View>
                    <Text style={{ fontSize: 24, color: COLORS.white, alignSelf: 'center' }}>{userData.name}</Text>
                </View>
                <View style={styles.body}>
                    {conversationInfo.conversationMessagesList ?
                        <FlatList
                            contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-end', height: "100%" }}
                            data={conversationInfo.conversationMessagesList.conversationMessages}
                            keyExtractor={item => item.messageData.id}
                            renderItem={({ item }) => <Message data={item} />}
                        />
                        : <Text style={{ color: COLORS.white, textAlign: 'center' }}>Тут будут сообщения :)</Text>}
                </View>
                <View style={styles.footer}>
                    <Input label="" style={{ color: 'white', minHeight: 50, flex: 1 }} defaultBorderColor={COLORS.primary} focusedBordercolor={COLORS.primary} onChangeTextFunc={setMessage} placeHolder={"Сообщение..."} maxLength={500} borderWidth={0} value={message} />
                    <CustomButton label="Отправить" fontSize={14} backgroundColor={COLORS.secondary} style={{ minHeight: 50, maxHeight: 50 }} onPress={() => { SendingMessageHandler(); }} />
                </View>
            </View>
        </View >
    )
}

const mapStateToProps = (state) => {
    const conversationInfo = state.conversationsReducer;
    return { conversationInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { fetchGetConversationMessages, UpdateConversationMessagesList, FetchSendingMessage },
        dispatch
    );

export const MessagesScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesScreenLayout);

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
    },
    footer: {
        //flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        maxHeight: 300,
        minHeight: 50,
        alignItems: "flex-end",
    },
    image_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingEnd: 10,
    },
    image: {
        borderRadius: 50,
        height: 50,
        width: 50,
    },
})