import React, { useContext, useState, Component } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';
import CardCart from '../../components/card/cardCart';
import { Card } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { TouchableOpacity } from 'react-native-ui-lib';


const Cart = ({ route, navigation }) => {
    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);

    function comprar() {
        Alert.alert('Comprar');
        console.log('Comprar');
    }
    const { listarProdutos } = useContext(CarrinhoContext)
    console.log(listarProdutos());

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.titulo}>Carrinho de Compras</Text>
            </View>
            <CardCart />

            <View style={styles.rodape}>

                <Text style={styles.titulo2}>QUANTIDADE DE PRODUTOS: </Text>
                <Text style={styles.titulo2}>VALOR TOTAL: </Text>

                <View style={styles.botoes}>
                    <Button
                        title='Finalizar Compra'
                        onPress={comprar}
                        buttonStyle={styles.button_finalizar}
                        titleStyle={styles.buttons_textFinalizar}
                    />
                    <Button
                        title='Limpar Carrinho'
                        onPress={comprar}
                        buttonStyle={styles.button_finalizar}
                        titleStyle={styles.buttons_textFinalizar}
                    />

                </View>

            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    topo: {
        marginTop: 50,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    titulo2: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000',
        padding: 7.5,
    },
    rodape: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,


        backgroundColor: '#ffffff',
        width: 400,
        height: 200,
        borderRadius: 15,



        marginBottom: 20,

        shadowColor: '#161616',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 100,
        elevation: -5,
    },
    buttons_textFinalizar: {
        fontSize: 18,
        color: '#ffffff',
    },
    button_finalizar: {
        width: 180,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 9,
        backgroundColor: '#562637',
    },
    botoes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        marginRight: 6,

    }
});

export default Cart;

