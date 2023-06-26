import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../../constans";

export const Input = ({ label = 'Заголовок', maxLength = 20, onChangeTextFunc, secureTextEntry = false, style = {}, placeHolder = "", defaultBorderColor = COLORS.white, focusedBordercolor = 'Transparent', borderWidth = 2, value }) => {
    const defaultInputColor = defaultBorderColor;
    const focusedInputColor = focusedBordercolor;
    const [inputColor, setinputColor] = useState(defaultInputColor);
    return (
        <View style={[styles.container, style]}>
            {label ? <Text style={[styles.label, { color: inputColor }]}>{label}</Text> : <></>}
            <TextInput placeholder={placeHolder} secureTextEntry={secureTextEntry} /*multiline={true}*/ placeholderTextColor={COLORS.lightGray} onFocus={() => setinputColor(focusedInputColor)} onBlur={() => setinputColor(defaultInputColor)} style={[styles.input, style, { borderColor: inputColor, borderWidth: borderWidth, }]} maxLength={maxLength} onChangeText={(e) => { onChangeTextFunc(e) }} value={value} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //width: '100%',
        fontSize: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        top: -10,
        left: 10,
        zIndex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    input: {
        color: COLORS.white,
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
    },
});