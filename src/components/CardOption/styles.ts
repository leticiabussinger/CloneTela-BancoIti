import { StyleSheet } from 'react-native';

export const styles = (id: string) => StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 15,
        borderColor: "#dadadc",
        borderWidth: 1,
        padding: 7,
        justifyContent: 'space-between',
        marginLeft: id === '1' ? 23 : 12,
        marginRight: id === "5" ? 23 : 0
    },
    imageCard: {
        width: 20,
        height: 20
    }
});