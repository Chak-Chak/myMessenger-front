import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: "#c9c9c9",
        maxHeight: 400,
        height: 400,
        width: '80%',
    },
    headerText: {
        fontSize: 40,
        color: 'blue',
        textAlign: 'center',
    },
    defaultText: {
        fontSize: 20,
        textAlign: 'center',
        width: '30%',
        textAlignVertical: 'center',
        numberOfRows: 1,
        textAlign: 'left',
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
        width: '70%',
        textAlign: 'left',
    }
})