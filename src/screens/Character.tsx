import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { fetchCharacter } from "../api/requests";
import _ from "lodash";

const CharacterScreen = ({ route }) => {
    const { characterUrl } = route.params;
    useEffect(() => {
        fetchCharacter(characterUrl)
        .then((fetchCharacter) => setCharacter(fetchCharacter.data))
        .catch((error)=> console.log(error))
    }, []);

    const [character, setCharacter] = useState();
    if (character && _.size(character) > 0) {
        return (
            <View style={styles.bg}>
                <Image style={styles.characterImage} source={{ uri: character?.image }} ></Image>
                <View style={styles.textView}>
                    <Text style={styles.text}>{character?.name}</Text>
                    <Text style={styles.text}>Location: {character?.location.name}</Text>
                    <Text style={styles.text}>Gender: {character?.gender}</Text>
                    <Text style={styles.text}>Species: {character?.species}</Text>
                    <Text style={styles.text}>Status: {character?.status}</Text>
                </View>
            </View>
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
    bg: {
        flex: 1,
        alignItems: "center"
    },
    characterImage: {
        borderRadius: 50,
        borderWidth: 2,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        margin: 20
    },
    textView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    }
});

export default CharacterScreen;