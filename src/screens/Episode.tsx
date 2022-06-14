
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EpisodeItemType } from "../components/episodeInfo";
import { characterInfo } from "../components/characterInfo";
import { fetchEpisode } from "../api/requests";

const EpisodeScreen = ({ route }) => {

    const [episode, setEpisode] = useState<EpisodeItemType | undefined>(undefined);
    useEffect(() => {
        fetchEpisode(episodeUrl)
        .then((fetchEpisode) => setEpisode(fetchEpisode.data))
        .catch((error)=> console.log(error))
    }, []);

    const { episodeUrl } = route.params;

    if (episode && _.size(episode) > 0) {
        return (
            <ScrollView>
                <Text style={[styles.mainText, { marginTop: 50 }]}>{episode.episode}</Text>
                <Text style={styles.mainText}>{episode.name}</Text>
                <Text style={[styles.mainText, { marginBottom: 50 }]}>{episode.air_date}</Text>
                {_.map(episode.characters, characterInfo)}
            </ScrollView>
        )
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
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
    },
    mainText: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    }
});

export default EpisodeScreen;