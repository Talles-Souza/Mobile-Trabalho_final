import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator, Image } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

//FAVOR NÃO MEXER NA PAG DE LOGIN, JA ESTÁ SENDO FEITA PELA FERNANDA


const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useContext(AutenticacaoContext);
    const [isLoading, setLoading] = useState(false);

    const handleLogin = async (email: string, senha: string) => {
        console.log("Email : ", email, "Senha :", senha);

        const respostaLogin = await login(email, senha);
        setLoading(false);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "Ok" },
                    { text: "Não foi possivel fazer o login" }
                ]

            );
        } else {
            navigation.navigate('HomeScreen');
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/bookland.png')} />
            <Text style={styles.texto_entrada}>{'Login'}</Text>
            <Input inputContainerStyle={styles.inputContainer}
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='email' color='#000' type='Entypo' size={24} />}
                placeholderTextColor={'black'}
            />
            <Input inputContainerStyle={styles.inputContainer}
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name="vpn-key" color="#000000" type="MaterialIcons" size={24} />}
                placeholderTextColor={'black'}
                secureTextEntry
            />
            {isLoading === false ?
                <Button
                    title='Entrar'
                    onPress={() => { handleLogin(email, senha); setLoading(true) }}
                    titleStyle={styles.buttons_text}
                    buttonStyle={styles.buttons}
                /> : <ActivityIndicator size="large" color="#fff" />}
            <View style={styles.container_buttons}>
                <Button
                    title='Cadastro'
                    onPress={() => navigation.navigate('Register')}
                    titleStyle={styles.buttons_text2}
                    buttonStyle={styles.button_cadastro}
                />
                <Button
                    title='Alterar senha'
                    onPress={() => navigation.navigate('Recuperar senha')}
                    buttonStyle={styles.button_recuperar}
                    titleStyle={styles.buttons_text3}
                />
            </View>
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
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 270,
        height: 200,
        marginLeft: 50,
    },
    inputContainer: {
        backgroundColor: '#F9F6F6',
        marginTop: 10,
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
        fontSize: 19,
    },
    buttons_text2: {
        fontSize: 18,
    },
    buttons_text3: {
        fontSize: 18,
    },
    container_buttons: {
        width: 380,
        marginTop: 10,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
    },
    button_cadastro: {
        marginTop: 10,
        width: 140,
        padding: 13,
        backgroundColor: '#854553',
        borderRadius: 9,
    },
    button_recuperar: {
        marginTop: 10,
        width: 180,
        padding: 13,
        borderRadius: 9,
        backgroundColor: '#854553',
    },
});
export default Login;