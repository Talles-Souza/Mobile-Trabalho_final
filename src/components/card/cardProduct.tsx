import * as React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card} from 'react-native-paper';

const CardProduct = ({ dados, navigation }) => {

    const dadosProduto = dados;
    console.log(dadosProduto);

    return (

        <View style={styles.container}>
            <Card style={styles.container1}>
                <Image source={{ uri: dadosProduto.imagemProduto }} style={styles.imagem} />

                <Card.Title
                    title={dadosProduto.nomeProduto}
                    titleStyle={{ flexWrap: 'wrap', flexDirection: 'row', fontSize: 15 }} />


                <View style={styles.icones}>
                    <Text style={{ color: "black", marginLeft: 10 }}>R$ {dadosProduto.precoProduto}</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Icon style={{ marginLeft: 50, }}
                            name="shopping-cart"
                            color={"black"}
                            size={22}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Icon style={{ marginLeft: 8, }}
                            name="heart" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>
                </View>
            </Card>

        </View>





    );
}

const styles = StyleSheet.create({
    card: {


    },
    container: {

        padding: 7,
        width: 190,
        maxHeight: 330,
        justifyContent: 'center'


    },
    container1: {

        Width: 190,
        height: 300,



    },
    imagem: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 12,

        width: 150,
        height: 200,
    },
    icones: {
        display: 'flex',
        flexDirection: 'row',
    }

});
export default CardProduct;