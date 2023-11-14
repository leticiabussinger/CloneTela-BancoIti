import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { CardBenef } from '../../screens/Home/Home';

interface CardBenefitProps {
    card: CardBenef;
};

export const CardBenefit = ({ card }: CardBenefitProps) => {
    const cardStyles = styles(card.id);
    return (
        <>
            {card.id === '2' ?

                <ImageBackground source={card.url} resizeMode='cover' style={cardStyles.imageBackground}>
                    <View style={cardStyles.containerText}>
                        <Text style={cardStyles.textName}>{card.name}</Text>
                        <Text style={cardStyles.textDescription}>{card.description}</Text>
                        <View style={cardStyles.containerButtonText}>
                            <Text style={cardStyles.buttonText}>{card.button}</Text>
                        </View>
                    </View>
                </ImageBackground>

                :
                <View style={cardStyles.container}>
                    <View style={cardStyles.containerImageIcon}>
                        <Image source={card.url} style={cardStyles.imageIcon} />
                    </View>
                    <View style={cardStyles.containerText}>
                        <Text style={cardStyles.textName}>{card.name}</Text>
                        <Text style={cardStyles.textDescription}>{card.description}</Text>
                        <View style={cardStyles.containerButtonText}>
                            <Text style={cardStyles.buttonText}>{card.button}</Text>
                        </View>
                    </View>
                </View>
            }


        </>
    )
}
