import { StyleSheet } from 'react-native';

export const styles = (id: string) => StyleSheet.create({
    imageBackground: {
        width: 300,
        height: 300,
        marginLeft: 12,
        justifyContent: 'flex-end',
        padding: 25,
        overflow: 'hidden',
        borderRadius: 20
    },
    container: {
        backgroundColor: "#fe3385",
        marginLeft: id === '1' ? 23 : 12,
        marginRight: id === "3" ? 23 : 0,
        width: 300,
        height: 300,
        padding: 25,
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    imageIcon: {
        width: 70,
        height: 70
    },
    containerImageIcon: {
        width: "100%",
        alignItems: 'flex-end'
    },
    textName: {
        color: "#fff"
    },
    textDescription: {
        color: "#fff",
        fontSize: 20,
        fontWeight: '500'
    },
    containerText: {
        gap: 10
    },
    containerButtonText: {
        alignItems: 'flex-start',
        marginTop: 15
    },
    buttonText: {
        borderRadius: 20,
        borderColor: "#dadadc",
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#fff"
    }

});