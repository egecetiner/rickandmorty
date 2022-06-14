import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const characterInfo = (characterUrl) => {
    const navigation = useNavigation()
    let characterNumber = characterUrl.substr(42);
    return (
        <TouchableOpacity key={characterNumber} style={styles.textView} onPress={() => navigation.navigate('CharacterScreen', { characterUrl })}>
            <Text style={styles.text}>Character Number: {characterNumber}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textView: {
        backgroundColor: "lightblue",
        alignSelf: "center",
        width: 300,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "brown",
        borderRadius: 5,
        padding: 5,
        margin: 10
    },
    text: {
        fontSize: 18,
    }
});