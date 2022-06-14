import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { EpisodeItemType } from "../types";

export const renderEpisode = (item: EpisodeItemType, onPressFunction: () => void) => {
    return (
        <TouchableOpacity
            key={item.id}
            onPress={onPressFunction}
            style={styles.episode}>
            <Text style={styles.text}>{item.episode}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.air_date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    episode: {
        backgroundColor: "pink",
        borderWidth: 1,
        borderColor: "brown",
        borderRadius: 5,
        padding: 5,
        margin: 10,
        width: 300,
        alignSelf: "center",
        alignItems: "center"
    },
    text:  {
        fontSize: 18,
        margin: 3
    }
});