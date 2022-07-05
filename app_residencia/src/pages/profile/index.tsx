import React, { useContext } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';


const Profile = ({ route, navigation }) => {

    const { usuario } = useContext(AutenticacaoContext);

    return (
        <View style={styles.container}>
            <View style={styles.circulo}>
                <Image style={styles.fotoPerfil} source={require('../../assets/bookland.png')} />
            </View>
            <View style={styles.square}>
                <View style={styles.views_do_nome_email}>
                    <Text style={styles.textName}>ID de usuario:</Text>
                    <Text style={styles.textName2}>{usuario.id}</Text>
                </View>
                <View style={styles.views_do_nome_email}>
                    <Text style={styles.textName}>Email:</Text>
                    <Text style={styles.textName2}>{usuario.email}</Text>
                </View>
                <View style={styles.nome_e_email}>
                    <View style={styles.views_do_nome_email}>
                        <Text style={styles.textName}>Nome:</Text>
                        <Text style={styles.textName2}>{usuario.name}</Text>
                    </View>
                </View>
            </View>
            <Button
                title='Alterar senha'
                onPress={() => navigation.navigate('Alterar senha')}
                buttonStyle={styles.button_recuperar}
                titleStyle={styles.buttons_text3}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2717C',
        padding: 16,
        alignItems: 'center',

    },
    circulo: {
        backgroundColor: '#ffffff',
        borderRadius: 150,
        width: 250,
        height: 250,
    },
    square: {
        backgroundColor: '#562637',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    nome_e_email: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#562637',
    },
    button_edit: {
        backgroundColor: '#A2717C',
        marginTop: 10,
        cursor: 'pointer',
    },
    button_editTittle: {
        fontSize: 20,
    },
    inputContainerName: {
        backgroundColor: '#ffffff',
        width: '100%',
        marginTop: 10,
    },
    inputContainerEmail: {
        backgroundColor: '#ffffff',
        width: '100%',
        marginTop: 10,
    },
    textName: {
        color: '#121212',
        backgroundColor: '#fff',
        fontWeight: 'bold',
    },
    textName2: {
        color: '#121212',
        backgroundColor: '#fff',
    },
    fotoPerfil: {
        borderRadius: 150,
        width: 250,
        height: 250,
    },
    views_do_nome_email: {
        backgroundColor: '#ffffff',
        padding: 10,
        width: 300,
        height: 60,
        marginTop: 15,
    },
    buttons_text3: {
        fontSize: 18,
    },
    button_recuperar: {
        marginTop: 10,
        width: 180,
        padding: 13,
        borderRadius: 9,
        backgroundColor: '#854553',
    }
});

export default Profile;