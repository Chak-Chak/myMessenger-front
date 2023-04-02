import { StyleSheet } from "react-native";
import { COLORS } from '../../../constans.js';

export default StyleSheet.create({
    wrapper: {
        //flex: 1,
        //flexDirection: 'column',
        //backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '95%',
        height: '100%',
        paddingTop: 30,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxHeight: '9%',
        //backgroundColor: "red",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.darkGray,
        paddingBottom: 5,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 40,
        color: COLORS.secondary,
        textAlign: 'center',
    },
})