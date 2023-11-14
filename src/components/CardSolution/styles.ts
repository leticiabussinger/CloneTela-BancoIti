import { StyleSheet } from 'react-native';

export const styles = (id: string, width: number) => StyleSheet.create({
    container: {
        backgroundColor: "#2b384b",
        width: width,
        height: width,
        borderRadius: 15,
        borderColor: "#dadadc",
        borderWidth: 1,
        padding: 15,
        justifyContent: 'space-between',
        marginLeft: id === '2' || id === '4' ? 10 : 0,
        marginBottom: id === '1' || id === '2' ? 10 : 0
    },
    imageCard: {
        width: 25,
        height: 25,
        tintColor: "#ffffff"
    },
    text: {
        color: "#fff"
    }
});