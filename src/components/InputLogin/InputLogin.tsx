import React from 'react'
import { TextInput } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export const InputLogin = () => {

    return (
        <LinearGradient colors={["#ed6d09", "#fe3385"]} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.05 }} style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                secureTextEntry
                editable={true}
            />
        </LinearGradient>
    )
}