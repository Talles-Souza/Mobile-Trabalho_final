import React, { useContext } from 'react';
import { Card } from 'react-native-paper';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const CardCategories = ({ dados, navigation }) => {


    return (
        <TouchableOpacity
            style={styles.botao_categoria}
            onPress={() => { navigation.navigate({ name: 'Categorias' }) }}>
            <Card style={styles.container}>
                <Card.Content style={styles.cardNome}>
                    <Text style={styles.categoria_nome}>{dados.nomeCategoria}</Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}; const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: 150, height: 150,
        backgroundColor: '#AF6B79',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
    cardNome: {
        justifyContent: 'center',
        marginTop: 18,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    scroll_categorias: {
        flexGrow: 0,
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 20,

    },
    categoria_nome: {
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 18,
        paddingRight: 5,

    }
})

export default CardCategories;