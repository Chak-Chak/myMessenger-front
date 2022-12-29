import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const Input = ({ label = 'Заголовок', maxLength = 20, onChangeTextFunc, secureTextEntry = false }) => {
    const defaultInputColor = 'rgba(0, 0, 0, 0.7)';
    const focusedInputColor = 'rgba(0, 8, 255, 0.8)';
    const [inputColor, setinputColor] = useState(defaultInputColor);
    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: inputColor }]}>{label}</Text>
            <TextInput onFocus={() => setinputColor(focusedInputColor)} onBlur={() => setinputColor(defaultInputColor)} secureTextEntry={secureTextEntry} style={[styles.input, { borderColor: inputColor }]} maxLength={maxLength} onChangeText={(e) => { onChangeTextFunc(e) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        fontSize: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: -10,
        left: 10,
        zIndex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    input: {
        borderWidth: 2,
        //borderColor: 'rgba(0, 0, 0, 0.7)',
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 16,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
});