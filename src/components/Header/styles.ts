import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconNameText: {
        fontWeight: "500",
    },
    nameText: {
        color: '#fff',
        marginLeft: 13,
        fontWeight: "500",
        fontSize: 16
    },
    iconImage: {
        width: 20,
        height: 20
    },
    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    }
});