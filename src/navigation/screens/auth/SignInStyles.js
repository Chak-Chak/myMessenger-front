import { StyleSheet } from "react-native";
import { COLORS } from '../../../../constans.js';

export default StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 40,
        color: COLORS.secondary,
        textAlign: 'center',
    },
})