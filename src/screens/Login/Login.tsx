import React from 'react';
import { View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, NativeEventSubscription } from 'react-native';
import { styles } from './styles';
import { InputLogin } from '../../components/InputLogin/InputLogin';
import ArrowIcon from '../../../assets/img/leftArrowIcon.png'
import HelpIcon from '../../../assets/img/helpIcon.png'
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home' as never);
    };
    const handlePress = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Image source={ArrowIcon} style={styles.image} />
                    <Text style={styles.title}>senha iti</Text>
                    <Image source={HelpIcon} style={styles.image} />
                </View>
                <View style={styles.containerInput}>
                    {[...Array(6)].map((_, index) => (
                        <InputLogin key={index.toString()} />
                    ))}
                </View>
                {/* <FlatList
                data={passwordFields}
                renderItem={() => <InputLogin />}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                style={styles.inputContainer}
                showsHorizontalScrollIndicator={false}
            /> */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword} onPress={goToHome}>esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};
