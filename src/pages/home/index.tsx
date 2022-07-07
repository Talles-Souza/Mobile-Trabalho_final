import React, { useContext, useEffect, useState } from "react";
import MyCard from "../../components/card/card";
import { View, FlatList, ScrollView, StyleSheet, RefreshControl } from "react-native";
import Axios from "../../api/axios";
import CarouselHome from "../../components/carousel";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import MySearch from '../../components/search';
import CardProduct from "../../components/card/cardProduct";


type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

const Home = ({ route, navigation }) => {

    const numColumns = 2;
    const [loading, setLoading] = useState(false);
    const { usuario } = useContext(AutenticacaoContext);


    const [produtos, setProduto] = useState<any[]>([]);

    useEffect(() => {
        getDadosProduto();
    }, []);

    const getDadosProduto = async () => {
        Axios.get(
            '/produto',
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setProduto(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }


    console.log('Token' + usuario.token);


    return (
        <ScrollView style={styles.container}>

            <View style={styles.box}>
                {/* <MyHeader /> */}
                <MySearch />
                <CarouselHome />
                <MyCard />
                <FlatList
                    data={produtos}
                    keyExtractor={item => item.idProduto}
                    numColumns={numColumns}

                    renderItem={({ item }) =>
                        <CardProduct
                            dados={item}
                            navigation={navigation}
                        />
                    }
                />
            </View>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    },


})

export default Home;