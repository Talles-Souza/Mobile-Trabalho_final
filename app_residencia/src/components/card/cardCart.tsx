import * as React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';


const CardCart = () => {

    return (

        <View style={styles.card}>
            <Image style={styles.imagem} source={{ uri: 'https://media.discordapp.net/attachments/983838532844015708/994379981457199154/declinio.jpg?width=371&height=559' }} />
            <View style={styles.direita}>
                <Text numberOfLines={5} style={{ width: 180, marginLeft: 10, fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Text>
                <Text style={styles.preco}>R$100.00</Text>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.primeiro}>
                        <Icon
                            name="plus" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name="minus" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.terceiro}>
                        <Icon
                            name="delete" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 120,
        height: 180,

    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 380,
        height: 230,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#161616',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
        padding: 20,
        marginTop: 15,
    },
    direita: {
        flexDirection: 'column',
        padding: 12,
        alignItems: 'center',
        width: 200,


    },
    preco: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    botoes: {
        flexDirection: 'row',
        marginTop: 20,

    },
    primeiro: {

        paddingRight: 15,

    },
    terceiro: {

        paddingLeft: 15,

    },
});

export default CardCart;