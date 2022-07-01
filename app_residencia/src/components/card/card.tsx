import React, { useContext } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';


const MyCard = ({ dados, navigation }) => {
    //const dadosCategoria = props.dados;
    //console.log(dadosCategoria);
    // Fazer uma função para receber o índice de categoria, para direcionar ao local correto
    // Receber o consumo de api 
    // Fazer um styles criando um style para adicionar ao Card

    return (



        //Obs deixei esse card de exemplo de como podemos usar os styles e como fazer navegação
        // não precisa ser esse card, pode mudar, mas deixei aqui de exemplo
        // abaixo tambem tem como dar o style e como exportar;

        <TouchableOpacity
            style={styles.botao_categoria}
            onPress={() => { navigation.navigate({ name: 'Categorias' }) }}>
            <Card style={{ display: 'flex', width: 99, height: 90, backgroundColor: '#1cd1f1' }}>
                <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                    <Text style={styles.categoria_nome}> VAI RECEBER DA API </Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>


    );

}; const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        padding: 16,
    },
    scroll_categorias: {
        flexGrow: 0,
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 10,

    },
    categoria_nome: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default MyCard;