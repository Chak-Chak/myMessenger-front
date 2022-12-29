import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#c9c9c9",
        width: '80%',
        justifyContent: "flex-start",
    },
    headerText: {
        fontSize: 40,
        color: 'blue',
        textAlign: 'center',
    },
    defaultText: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        numberOfRows: 1,
        textAlign: 'left',
    },
})