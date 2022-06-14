import { useNavigation } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export type EpisodeItemType = {
    air_date: string,
    characters: [],
    episode: string,
    id: number,
    name: string,
    url: string
}

export const renderEpisode = (item: EpisodeItemType) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('EpisodeScreen', {
                episodeUrl: item.url
            })} style={styles.episode}>
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