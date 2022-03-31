import React from 'react';
import {Text, View} from "react-native";

const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 50,
            }}>Hola mundo!</Text>
        </View>
    );
};

export default HolaMundoScreen;
