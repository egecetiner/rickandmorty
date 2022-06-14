import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import _ from "lodash";
import { fetchEpisodes } from "../api/requests";
import { renderEpisode } from "../components/episodeInfo";

const HomeScreen = () => {
    const [episodes, setEpisodes] = useState();

    useEffect(() => {
        fetchEpisodes()
        .then((episodes) => setEpisodes(episodes))
        .catch((error) => console.log(error))
    }, []);


    if (episodes && _.size(episodes) > 0) {
        return (
            <ScrollView>
                <Image style={styles.image} source={{ uri: "https://www.cizgikafe.com/wp-content/uploads/2020/06/rick-and-morty.jpg" }} ></Image>
                {_.map(episodes, renderEpisode)}
            </ScrollView>
        );
    }
    else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
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