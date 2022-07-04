import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator, Image } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import Axios from "../../api/axios";

const Register = ({ route, navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleRegister = async (e: any) => {
        e.preventDefault();
        const data = {
            emailCliente: email,
            nomeCompletoCliente: name,
            senha: senha,

        };
        try {
            await Axios.post("/autenticacao/registro", data);
            setShow(true);
            setSuccess(true);
            setName("");
            setEmail("");
            setSenha("");
            navigation.navigate('/Login')
            Alert.alert("Cadastro realizado com sucesso, voce ira ser redirecionado para a tela de login")
        } catch (err) {
            Alert.alert(`err`)
            setShow(true);
            setSuccess(false);
        }
    };









    /* const handleRegister = async (name: string, email: string, senha: string) => {
         console.log(`Nome: ${name} - Email : ${email} - Senha : ${senha}`);*/

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/register.png')} />
            <Text style={styles.texto_entrada}>{'Cadastro'}</Text>
            <Input inputContainerStyle={styles.inputContainer}
                placeholder='Nome de usÃºario'
                onChangeText={newText => setName(newText)}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                placeholderTextColor={'black'}
            />
            <Input inputContainerStyle={styles.inputContainer}
                placeholder='E-mail'

                value={email} onChangeText={email => setEmail(email)}
                leftIcon={<Icon name='email' color='#000' type='Entypo' size={24} />}
                placeholderTextColor={'black'}
            />
            <Input inputContainerStyle={styles.inputContainer}
                placeholder='Senha'

                value={senha} onChangeText={senha => setSenha(senha)}
                leftIcon={<Icon name="vpn-key" color="#000000" type="MaterialIcons" size={24} />}
                placeholderTextColor={'black'}
                secureTextEntry

            />
            <Button
                title='Registrar'
                onPress={(e) => handleRegister(e)}
                // onPress={() => navigation.navigate('Login')}
                titleStyle={styles.buttons_text}
                buttonStyle={styles.buttons}
            />

            <Button
                title="Voltar"


                titleStyle={styles.buttons_text2}
                buttonStyle={styles.back_button}

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2717C',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 13,
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 230,
        height: 185,
        marginLeft: 100,
    },
    inputContainer: {
        backgroundColor: '#F9F6F6',
        padding: 5,
        borderRadius: 10,
    },
    buttons: {
        width: 360,
        marginLeft: 10,
        backgroundColor: '#854553',
        padding: 15,
        borderRadius: 10,
    },
    buttons_text: {
        fontSize: 20,
    },
    buttons_text2: {
        fontSize: 18,
        color: '#000'
    },
    container_buttons: {
        width: 380,
        marginTop: 10,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
    },
    back_button: {
        marginTop: 12,
        marginLeft: 12,
        width: 110,
        padding: 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 9,
    },


})
export default Register;