import * as React from 'react';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const CardProduct = ({ dados }) => {

    const dadosProduto = dados;
    console.log(dadosProduto);

    return (

        <View style={styles.container}>
            <Card containerStyle={styles.container1} >
                <Image source={{ uri: dadosProduto.imagemProduto }} style={styles.imagem} />
                <Card.Divider />
                <Card.Title >
                    <Text >{dadosProduto.nomeProduto}</Text>
                </Card.Title>
                <View style={styles.icones}>
                    <Text style={{ color: "black", }}>R$ {dadosProduto.precoProduto}</Text>
                    <Icon style={{ marginLeft: 25, }}
                        name="shopping-cart"
                        color={'black'}
                        size={22}
                    />
                    <Icon style={{ marginLeft: 8, }}
                        name="heart" type='ant-design'
                        color={'black'}
                        size={22}
                    />
                </View>
            </Card>

        </View>





    );
}

const styles = StyleSheet.create({
    card: {


    },
    container: {

        padding: 10,
        maxWidth: 190,
        maxHeight: 330,
        justifyContent: 'center'


    },
    container1: {
        padding: 0,
        Width: 180,
        height: 300,



    },
    imagem: {
        marginBottom: 10,
        width: 140,
        height: 200,
    },
    icones: {
        display: 'flex',
        flexDirection: 'row',
    }

});
export default CardProduct;