import React, { useContext } from "react";
import { Text, View } from "react-native";
import { CarrinhoContext } from "../../context/carrinhoContext";


export const Cart = () => {
    const { listarProdutos } = useContext(CarrinhoContext)
    console.log(listarProdutos());


    return (
        <View><Text>Olá</Text></View>

    );
}

