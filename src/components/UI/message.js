import { useState } from "react";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";

const url = 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg'; //Temp image

const MessageLayout = ({ myInfo, data }) => {
    const [isMineMessage, updateIsMineMessage] = useState(false);

    const CheckMessage = () => {
        if (data.messageData.senderId === myInfo.info.id) updateIsMineMessage(true);
    }

    useEffect(() => {
        CheckMessage();
    }, [])
    return (
        <View style={[isMineMessage ? styles.myMessageContainer : styles.anotherMessageContainer, styles.messageContainer]}>
            {/*<Image source={{ uri: url }} style={styles.image} />*/}
            <View style={isMineMessage ? styles.myMessageWrapper : styles.anotherMessageWrapper}>
                <Text style={styles.text}>{data.messageData.messageText}</Text>
                <Text style={styles.time}>{new Date(data.messageData.sendingDate).getHours()}:{new Date(data.messageData.sendingDate).getMinutes()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    myMessageContainer: {
        justifyContent: 'flex-end',
    },
    anotherMessageContainer: {
        justifyContent: 'flex-start',
    },
    wrapper: {
        justifyContent: 'center',
        textAlignVertical: "center",
        maxWidth: '70%',
    },
    text: {
        color: COLORS.white,
        fontSize: 16,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    time: {
        color: COLORS.white,
        justifyContent: 'center',
        fontSize: 12,
        padding: 3,
        textAlign: "right",
    },
    myMessageWrapper: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: COLORS.secondary,
    },
    anotherMessageWrapper: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: COLORS.primaryLight,
    },
    image: {
        borderRadius: 50,
        height: 45,
        width: 45,
        alignSelf: 'flex-end',
    },
})

const mapStateToProps = (state) => {
    const myInfo = state.myInfoReducer;
    return { myInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export const Message = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageLayout);