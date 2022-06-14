import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import _ from "lodash";
import { fetchEpisodes } from "../api/requests";
import { renderEpisode } from "../components/episodeInfo";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { EpisodeItemType } from "../types";

const HomeScreen = () => {
    const [episodes, setEpisodes] = useState<EpisodeItemType[]>();
    const navigation = useNavigation();

    useEffect(() => {
        fetchEpisodes()
            .then((episodes) => setEpisodes(episodes))
            .catch(console.error)
    }, []);

    if (episodes && _.size(episodes) > 0) {
        return (
            <ScrollView>
                <Image style={styles.image} source={{ uri: "https://www.cizgikafe.com/wp-content/uploads/2020/06/rick-and-morty.jpg" }} ></Image>
                {_.map(episodes, (item) => renderEpisode(item,
                    () => navigation.navigate('EpisodeScreen', {
                        episodeUrl: item.url
                    })
                ))}
            </ScrollView>
        );
    } else {
        return (
            <Loading />
        )
    }
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 50,
        borderWidth: 3,
        width: 350,
        height: 260,
        resizeMode: 'contain',
        alignSelf: "center",
        margin: 20
    }
});

export default HomeScreen;