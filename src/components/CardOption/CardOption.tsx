import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import { CardOpt } from '../../screens/Home/Home';


interface CardOptionProps {
    card: CardOpt;
};


export const CardOption = ({ card }: CardOptionProps) => {
    const cardStyles = styles(card.id);
    return (
        <View style={cardStyles.container}>
            <Image source={card.url} style={cardStyles.imageCard} />
            <Text>{card.name}</Text>
        </View>
    )
}
