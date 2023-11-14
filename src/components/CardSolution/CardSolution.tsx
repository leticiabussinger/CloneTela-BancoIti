import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { styles } from './styles';
import { CardSolut } from '../../screens/Home/Home';

interface CardSolutionProps {
    card: CardSolut;
};

export const CardSolution = ({ card }: CardSolutionProps) => {

    const { width } = Dimensions.get('window');
    const cardWidth = ((width * 0.88) / 2) - 5;
    const cardStyles = styles(card.id, cardWidth);

    return (
        <View style={cardStyles.container}>
            <Image source={card.url} style={cardStyles.imageCard} />
            <Text style={cardStyles.text}>{card.name}</Text>
        </View>
    )
}
