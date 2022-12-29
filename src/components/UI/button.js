import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButton = ({ label = 'Заголовок', fontSize = 16, onPress }) => {
    const backgroundColor = 'rgba(0, 8, 255, 0.8)';

    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.text, { fontSize: fontSize }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        alignSelf: 'center',
    }
});