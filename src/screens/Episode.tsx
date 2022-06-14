import _ from "lodash";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { characterInfo } from "../components/characterInfo";
import { fetchEpisode } from "../api/requests";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { EpisodeItemType } from "../types";

const EpisodeScreen = ({ route }) => {
    const navigation = useNavigation();
    const [episode, setEpisode] = useState<EpisodeItemType>();
    const { episodeUrl } = route.params;

    useEffect(() => {
        fetchEpisode(episodeUrl)
            .then((fetchEpisode) => setEpisode(fetchEpisode.data))
            .catch(console.error)
    }, []);

    if (episode && _.size(episode) > 0) {
        return (
            <ScrollView>
                <Text style={[styles.mainText, { marginTop: 50 }]}>{episode.episode}</Text>
                <Text style={styles.mainText}>{episode.name}</Text>
                <Text style={[styles.mainText, { marginBottom: 50 }]}>{episode.air_date}</Text>
                {_.map(episode.characters, (item) => characterInfo(item,
                    () => navigation.navigate('CharacterScreen', { characterUrl: item })
                ))}
            </ScrollView>
        )
    } else {
        return (
            <Loading />
        )
    }
}

const styles = StyleSheet.create({
    mainText: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    }
});

export default EpisodeScreen;