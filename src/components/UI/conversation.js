import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { COLORS } from "../../../constans";

const url = 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg';

export const ConversationLayout = ({ myInfo, data, userData, onPress }) => {
    //const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const DateProcessing = () => {
        let dataTime = new Date(data.lastMessageData.sendingDate);
        let now = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        if (dataTime.getUTCFullYear() === now.getUTCFullYear()) {
            if (dataTime.getUTCMonth() === now.getUTCMonth()) {
                if (dataTime.getUTCDay() === now.getUTCDay())
                    setTime(`${dataTime.getUTCHours()}:${dataTime.getUTCMinutes()}`);
                else setTime(`${dayNames[dataTime.getUTCDay()]}`);
            }
            else {
                if (dataTime.getUTCDay() < 10) {
                    setTime(`${monthNames[dataTime.getUTCMonth()]} 0${dataTime.getUTCDay()}`);
                } else setTime(`${monthNames[dataTime.getUTCMonth()]} ${dataTime.getUTCDay()}`);
            }
        } else setTime(dataTime.getUTCDay(), '.', dataTime.getUTCMonth(), '.', dataTime.getUTCFullYear());
    }

    useEffect(() => {
        DateProcessing();
    }, [])

    return (
        <View>
            <TouchableOpacity style={{ width: '100%', height: 80 }} onPress={onPress}>
                <View style={styles.wrapper}>
                    <View style={styles.image_wrapper}>
                        <Image source={{ uri: url }} style={styles.image} />
                    </View>
                    <View style={styles.content_wrapper}>
                        <View style={styles.name_time_wrapper}>
                            <Text numberOfLines={1} style={styles.name}>
                                {userData.name}
                            </Text>
                            <Text style={styles.time}>{time}</Text>

                        </View>
                        <View style={[styles.last_message_wrapper]}>
                            <Text numberOfLines={2} style={styles.last_message}>{data.lastMessageData.messageText}</Text>
                            {/*<Text numberOfLines={1} style={styles.new_messages}>1</Text>*/}
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        </View >
    )
}

const mapStateToProps = (state) => {
    const myInfo = state.myInfoReducer;
    return { myInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export const Conversation = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationLayout);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 80,
        alignItems: 'center',
    },
    image_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingEnd: 10,
    },
    content_wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    name_time_wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '100%',
        paddingBottom: 5,
    },
    last_message_wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100%',
    },
    image: {
        borderRadius: 50,
        height: 70,
        width: 70,
    },
    name: {
        color: COLORS.white,
        ellipsizeMode: 'tail',
        fontSize: 18,
    },
    last_message: {
        color: COLORS.white,
        ellipsizeMode: 'tail',
        fontSize: 16,
    },
    time: {
        color: COLORS.white,
    },
    new_messages: {
        color: COLORS.white,
        backgroundColor: COLORS.secondary,
        height: 30,
        maxWidth: 60,
        minWidth: 30,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        ellipsizeMode: 'tail',
        padding: 5,
    }
});