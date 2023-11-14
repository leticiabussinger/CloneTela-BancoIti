import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import ArrowIcon from '../../../assets/img/arrowIcon.png'
import { CardProd } from '../../screens/Home/Home';

interface CardProductProps {
    card: CardProd;
};

export const CardProduct = ({ card }: CardProductProps) => {

    return (
        <View style={styles.container}>
            <Image source={card.url} style={styles.imageLogo} />
            <View style={styles.title}>
                <Text style={styles.descriptionTitle}>{card.name}</Text>
                <Text>R$ ••••</Text>
            </View>
            <View style={styles.hr} />
            <View style={styles.title}>
                <Text style={styles.description}>{card.description}</Text>
                {card.id === '1' ? (
                    <View style={styles.containerArrow}>
                        <Image source={ArrowIcon} style={styles.imageIcon} />
                    </View>
                ) : (
                    <View style={styles.containerArrow}>
                        <Text style={styles.description}>R$ ••••</Text>
                        <Image source={ArrowIcon} style={styles.imageIcon} />
                    </View>
                )}
            </View>
        </View>
    )
}
