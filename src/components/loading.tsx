import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
    return (
        <View style={styles.bg}>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Loading