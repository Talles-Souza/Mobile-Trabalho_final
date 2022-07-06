import React, { useContext, useState, Component } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';


const Profile = ({ route, navigation }) => {
    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);


    return (
        <View style={styles.container}>
            <View style={styles.circulo}>
                <Image style={styles.fotoPerfil} source={require('../../assets/bookland.png')} />
            </View>
            <View style={styles.square}>
                <View style={styles.views_do_nome_email}>
                    <Text style={styles.textName}>Nome do Usuário: {usuario.name}</Text>
                    <Text style={styles.textName}>Email: {usuario.email}</Text>
                    <Text style={styles.textName}>Senha:*********** </Text>
                </View>
                <TextInput style={styles.inputContainer}
                    placeholder={descricao}
                    multiline={true}
                    value={descricao}
                    onChangeText={(descricao) => setDescricao(descricao)}
                    placeholderTextColor={'black'}

                />

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
        backgroundColor: '#ffffff',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',

    },
    circulo: {
        backgroundColor: '#ffffff',
        borderRadius: 150,
        width: 250,
        height: 250,
    },
    square: {
        backgroundColor: '#e0dada',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 40,
    },
    button_edit: {
        backgroundColor: '#A2717C',
        marginTop: 10,
        cursor: 'pointer',
    },
    button_editTittle: {
        fontSize: 20,
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        width: 300,
        padding: 30,
        borderRadius: 10,
        fontSize: 15,
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
        height: 80,
        borderRadius: 10,
        marginBottom: 25,
    },
    buttons_text3: {
        fontSize: 18,
    },
    button_recuperar: {
        marginTop: 30,
        width: 180,
        padding: 13,
        borderRadius: 9,
        backgroundColor: '#562637',
    },
});

export default Profile;