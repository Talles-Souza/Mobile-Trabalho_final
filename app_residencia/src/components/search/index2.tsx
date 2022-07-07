import React, {useState, useEffect, useContext} from 'react';
import {StatusBar, View, TextInput, StyleSheet, Alert} from 'react-native';
import {Icon, Input, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Axios from '../../api/axios';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { usePesquisar } from '../../context/PesquisaContext2';
import { ProdutoType } from '../../models/produtoType';

export default function BarraPesquisa(props) {
    const [pesquisa, setPesquisa] = useState('');
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const {usuario} = useContext(AutenticacaoContext);
    const pesquisar = usePesquisar();
  
    const selecionaPesquisa = (produto: any) => {
        //pesquisar.Buscar(produto);
        Alert.alert(produto.nomeProduto);
        props.navigation.navigate('Home');
        setPesquisa("")
        console.log('Produto clicado', pesquisar.pesquisa);
    
      };
      useEffect(() => {
        getDadosProduto();
      }, []);

      const getDadosProduto = async () => {
        Axios.get(`/produto`, {
          headers: {Authorization: `Bearer ${usuario.token}`},
        })
          .then(result => {
            // console.log('Dados das categorias:' + JSON.stringify(result.data));
            setProduto(result.data);
          })
          .catch(error => {
            console.log(
              'Erro ao carregar a lista de produtos!' + JSON.stringify(error),
            );
          });
      };

      return (
        <View style={{flex: 1, paddingLeft: 15, marginTop: 20, paddingRight: 15, alignItems: 'center'}}>
          <View style={styles.containerPesquisa}>
            <Input
              placeholder="Buscar"
              value={pesquisa}
              onChangeText={setPesquisa}
              inputContainerStyle={styles.inputs}
              placeholderTextColor={'#000000'}
              
            />

          </View>
          <ScrollView style={styles.resultadoContainer}>
            {produto
              .filter(val => {
                if (pesquisa.length <= 1) {
                  return;
                } else if (
                  val.nomeProduto.toLowerCase().includes(pesquisa.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((produto, indice) => (
                <Text
                  style={styles.pesquisaResultado}
                  onPress={e => selecionaPesquisa(produto)}
                  key={indice}>
                  {produto.nomeProduto}
                </Text>
              ))}
          </ScrollView>
        </View>
      );

    }

    const styles = StyleSheet.create({
        containerPesquisa: {
          width: 390,
          backgroundColor: '#ffffff',
          height: 50,
          flex: 1,
          alignItems:'center',
          justifyContent:'center',
          marginBottom:25,
          textAlign: 'center',
          borderBottomWidth: 0,
          
        },
        inputs: {
          color: 'white',
          borderBottomColor: 'white',
          padding: 5,
          marginTop:30,
          flex: 1,
          borderBottomWidth: 0

        },
        resultadoContainer: {
          width: '100%',
          marginTop: 5,
          position:'absolute',
          zIndex:1,
          top:42,
          left: 15,
          backgroundColor: 'white',
          borderRadius: 10,
        },
        pesquisaResultado: {
          width: 270,
          backgroundColor: 'white',
          padding: 12,
          paddingLeft: 13,
          borderBottomColor: 'white',
          fontWeight:'bold',
          borderBottomWidth: 1,
          marginTop:10,
        },
      });