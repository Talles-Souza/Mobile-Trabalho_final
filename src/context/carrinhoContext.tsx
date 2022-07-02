import React, { createContext } from "react";
import Realm from "realm";



//exemplo de carrinho feito pelo professor, falta somente a operação de remover
// podemos decidir onde utilizar tanto Carrinho ou Caixa de favoritos
// usar de exemplo para adaptarmos ao nosso trabalho



export const CarrinhoContext = createContext({});


class ProdutosSchema extends Realm.Object { }
ProdutosSchema.schema = {
    name: 'Produto',
    properties: {
        id_produto: { type: 'int', default: 0 },
        sku: 'string',
        nome_produto: 'string',
        descricao_produto: 'string',
        preco_produto: 'double',
        imagem_produto: 'string'

    }
};

let realm_carrinho = new Realm({ schema: [ProdutosSchema], schemaVersion: 1 });

export function CarrinhoProvider({ children }) {
    const listarProdutos = () => {
        return realm_carrinho.objects('Produto');
    }

    const contarQuantidadeProdutos = () => {
        return realm_carrinho.objects('Produto').length;
    }
    const adicionarProduto = (_sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string) => {

        const ultimoProdutoCadastrado = realm_carrinho.objects('Produto').sorted('id_produto', true)[0];
        const ultimoIdCadastrado = ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
        const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

        realm_carrinho.write(() => {
            const produto = realm_carrinho.create('Produto', {
                id_produto: proximoId,
                sku: _sku,
                nome_produto: _nome,
                descricao_produto: _descricao,
                preco_produto: _preco,
                imagem_produto: _imagem

            });

        });

    }

    return (
        <CarrinhoContext.Provider value={{
            listarProdutos,
            contarQuantidadeProdutos,
            adicionarProduto,
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
