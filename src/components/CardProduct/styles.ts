import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 20,
        borderColor: "#dadadc",
        borderWidth: 1,
        gap: 12
    },
    imageLogo: {
        width: 25,
        height: 25,
        marginBottom: 10
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hr: {
        borderColor: "#dadadc",
        borderWidth: 1,
        width: "100%"
    },
    descriptionTitle: {
        fontSize: 15,
        fontWeight: "500"
    },
    description: {
        color: "#909193",
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 20
    },
    containerArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    imageIcon: {
        width: 15,
        height: 15
    }
});