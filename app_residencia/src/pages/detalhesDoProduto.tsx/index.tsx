import React, { useContext, useState, Component } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';
import DetalhesDoProduto from '../../components/card/cardDetalhes';
import { Card } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { TouchableOpacity } from 'react-native-ui-lib';


const DetalhesProduto = ({ route, navigation }) => {
    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);



    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.titulo}>Detalhes do Produto</Text>
            </View>
            <DetalhesDoProduto />

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topo: {
        marginTop: 50,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,

    },

});

export default DetalhesProduto;