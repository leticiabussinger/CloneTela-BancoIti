import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
        backgroundColor: "#fff"
    },
    containerHeader: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 60
    },
    image: {
        width: 20,
        height: 20,
        tintColor: "#000000"
    },
    title: {
        fontSize: 16
    },
    forgotPassword: {
        marginTop: 60,
        color: '#ec8c39',
        fontWeight: "600"
    },
    containerInput: {
        flexDirection: 'row'
    }
});