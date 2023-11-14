import React from 'react'
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import HelpIcon from '../../../assets/img/helpIcon.png';
import NotificationIcon from '../../../assets/img/notificationIcon.png';
import { User } from '../../screens/Home/Home';

interface UserProps {
    user: User;
};

export const Header = ({ user }: UserProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconName}>
                <View style={styles.icon}>
                    <Text style={styles.iconNameText}>
                        {user.initials}
                    </Text>
                </View>
                <Text style={styles.nameText}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.containerIcons}>
                <Image source={HelpIcon} style={styles.iconImage} />
                <Image source={NotificationIcon} style={styles.iconImage} />
            </View>
        </View>

    )
}
