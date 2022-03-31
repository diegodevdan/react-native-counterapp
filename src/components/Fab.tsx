import React, {FC} from 'react';
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";


interface IFab {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}

const Fab: FC<IFab> = ({title, onPress, position = 'br'}) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={[
                    styles.fabLocation,
                    position === 'br' ? styles.right : styles.left
                ]}
                onPress={onPress}

            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    position === 'br' ? styles.right : styles.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('green', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    return (
        (Platform.OS === 'ios') ? ios() : android()
    )
};

export default Fab;

const styles = StyleSheet.create({
    fabLocation: {
        position: "absolute",
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: 'purple',
        width: 60,
        height: 60,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    }
})
