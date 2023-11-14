import React from "react";
import { Text, View, FlatList, Image } from 'react-native';
import { ScrollView } from "react-native-virtualized-view";
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import EyeIcon from '../../../assets/img/eyeIcon.png'
import ArrowIcon from '../../../assets/img/arrowIcon.png'
import VaseIcon from '../../../assets/img/vaseIcon.png'
import { Header } from "../../components/Header/Header";
import { CardOption } from "../../components/CardOption/CardOption";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { CardBenefit } from "../../components/CardBenefit/CardBenefit";
import { CardSolution } from "../../components/CardSolution/CardSolution";


export interface CardOpt {
    id: string
    url: ImageSourcePropType
    name: string
}

export interface User {
    id: string
    name: string
    initials: string
}

export interface CardProd {
    id: string
    url: ImageSourcePropType
    name: string
    description: string
}

export interface CardBenef {
    id: string
    url: ImageSourcePropType
    name: string
    description: string
    button: string
}

export interface CardSolut {
    id: string
    url: ImageSourcePropType
    name: string
}


export const Home = () => {
    const [optionCard, setOptionCard] = React.useState<CardOpt[]>([
        { id: '1', url: require('../../../assets/img/goalIcon.png'), name: 'metas' },
        { id: '2', url: require('../../../assets/img/pixIcon.png'), name: 'transferir via Pix' },
        { id: '3', url: require('../../../assets/img/depositIcon.png'), name: 'colocar dinheiro' },
        { id: '4', url: require('../../../assets/img/payIcon.png'), name: 'pagar conta' },
        { id: '5', url: require('../../../assets/img/cardIcon.png'), name: 'cartão da conta' }
    ]);
    const [time, setTime] = React.useState<string>('');
    const [user, setUser] = React.useState<User[]>([
        { id: '1', name: 'Letícia', initials: "LN" }
    ]);
    const [productCard, setProductCard] = React.useState<CardProd[]>([
        { id: '1', url: require('../../../assets/img/logoIti.png'), name: 'saldo iti', description: "acessar extrato" },
        { id: '2', url: require('../../../assets/img/greyCardIcon.png'), name: 'fatura aberta', description: "limite disponível" },
        { id: '3', url: require('../../../assets/img/orangeCashIcon.png'), name: 'metas', description: "já renderam" }
    ]);
    const [benefitCard, setBenefitCard] = React.useState<CardBenef[]>([
        { id: '1', url: require('../../../assets/img/threeCircleIcon.png'), name: 'mais vantagem', description: "suas metas rendem 100% do CDI", button: "aproveite" },
        { id: '2', url: require('../../../assets/img/backgroundCellPhone.png'), name: 'benefícios iti', description: "aproveite descontos", button: "saiba mais" },
        { id: '3', url: require('../../../assets/img/cellPhoneSafe.png'), name: 'Open Finance iti', description: "tenha mais chances de crédito", button: "saiba mais" }
    ]);
    const [solutionCard, setSolutionCard] = React.useState<CardSolut[]>([
        { id: '1', url: require('../../../assets/img/pixIcon.png'), name: 'área Pix' },
        { id: '2', url: require('../../../assets/img/whiteCashIcon.png'), name: 'seus saldos' },
        { id: '3', url: require('../../../assets/img/cardIcon.png'), name: 'seus cartões' },
        { id: '4', url: require('../../../assets/img/menuIcon.png'), name: 'ver todos' }
    ]);

    React.useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setTime(`Bom Dia, ${user[0].name}!`)
        } else if (currentHour >= 12 && currentHour < 18) {
            setTime(`Boa Tarde, ${user[0].name}!`)
        } else {
            setTime(`Boa Noite, ${user[0].name}!`)
        }
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <LinearGradient colors={["#ed6d09", "#fe3385"]} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.05 }}>
                    <View style={styles.containerHeader}>
                        <View style={styles.infosHeader}>
                            <Header user={user[0]} />
                            <Text style={styles.headerText}>{time}</Text>
                        </View>
                    </View>

                    <View style={styles.containerBody}>
                        <View style={styles.containerBodyInfos}>
                            <View style={styles.containerFlatList}>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={optionCard}
                                    renderItem={({ item }) => <CardOption card={item} />}
                                />
                            </View>
                            <View style={styles.containerTextProductsMaxWidht}>
                                <View style={styles.containerTextProducts}>
                                    <Text style={styles.textProducts}>seus produtos</Text>
                                    <Image source={EyeIcon} style={styles.imageEye} />
                                </View>
                            </View>
                            <View style={styles.containerCardProductsMaxWidht}>
                                <View style={styles.containerCardProducts}>
                                    <CardProduct card={productCard[0]} />
                                    <CardProduct card={productCard[1]} />
                                    <CardProduct card={productCard[2]} />
                                </View>
                            </View>
                            <View style={styles.containerTextProductsMaxWidht}>
                                <View style={styles.containerTextProducts}>
                                    <Text style={styles.textProducts}>soluções para você</Text>
                                </View>
                            </View>
                            <View style={styles.containerCardProductsMaxWidht}>
                                <View style={styles.containerCardProducts}>
                                    <View style={styles.containerBenefits}>
                                        <View style={styles.vaseText}>
                                            <Image source={VaseIcon} style={styles.imageLogo} />
                                            <View style={styles.containerTextBenefits}>
                                                <Text style={styles.textBenefits}>benefícios iti</Text>
                                                <Text style={styles.textDiscount}>aproveite descontos</Text>
                                            </View>
                                        </View>
                                        <Image source={ArrowIcon} style={styles.imageIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.containerFlatListBenefit}>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={benefitCard}
                                    renderItem={({ item }) => <CardBenefit card={item} />}
                                />
                            </View>
                            <View style={styles.containerCardProductsMaxWidht}>
                                <View style={styles.containerTextProducts}>
                                    <Text style={styles.textProducts}>o que você deseja fazer?</Text>
                                </View>
                                <View style={styles.containerFlatListSolutions}>
                                    <FlatList

                                        numColumns={2}
                                        data={solutionCard}
                                        renderItem={({ item }) => <CardSolution card={item} />}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View >
        </ScrollView>
    );
}
