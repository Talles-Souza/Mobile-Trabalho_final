import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
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
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
            />
            <Input
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
                secureTextEntry
            />
            {isLoading === false ?
                <Button
                    title='Entrar'
                    onPress={() => { handleLogin(email, senha); setLoading(true) }}
                    titleStyle={styles.title_Button}
                /> : <ActivityIndicator size="large" />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7054B6',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'

    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        color: '#ffffff',

    },
    title_Button: {
        fontSize: 30,
    }
})

export default Login;