import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MessageScreenLayout = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 24 }}>Messages Screen</Text>
        </View>
    )
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export const MessagesScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageScreenLayout);