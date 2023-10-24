//"use strict";
//Use strict não permite variáveis sem declaração Ex: x = 10 chamando x da um erro.
//Pode ser colocado em qualquer parte do código, mas para funcionar de forma global tem que estar na primeira linha afetando todo o código.
//Tem como regra que todas as variáveis obrigatóriamente sejam declaradas Ex:  const x = 10 Não pode ser alterado o valor e let x = 20 Pode ser alterado x = 25 agora o x tem o valor de 25.

//na importação o use strict é padrão com isso não se faz necessário colocar o código no modo estrito na primeira linha."
import {
  formulario,
  qtdProduto,
  produtosVendidos,
  precoVenda,
  custoUnidade,
  despesaOp,
  receitaOp,
  depreciacao,
  amortizacao,
} from "./valoresInputs.js";
//Função alto invocável, tem como funcionalidade evitar poluição do escopo global e alguns erros.

(() => {
  /*Fórmulas padrões utilizadas pelos indices*/

  //calculo de receita
  const receita = (qtdProdutos, precoDeVenda) => qtdProdutos * precoDeVenda;

  //calculo de custos variáveis
  const custosVariaveis = (qtdProdutos, custoPorUnidade) =>
    qtdProdutos * custoPorUnidade;

  //Calculo de lucro bruto.
  let totalLucroBruto;
  const lucroBruto = (receita, custosVariaveis) => {
    totalLucroBruto = receita - custosVariaveis;
    return totalLucroBruto;
  };

  //Calculo de faturamento.
  const faturamento = (produtosVendidos, preco) => produtosVendidos * preco;

  //Calculo de lucro operacional.
  const lucroOperacional = (despesasOperacionais, receitasOperacionais) =>
    totalLucroBruto - (despesasOperacionais + receitasOperacionais);

  //Calculo EBITDA
  const calcularEBITDA = (lucroOperacionalLiquido, depreciacao, amortizacao) =>
    lucroOperacionalLiquido + depreciacao + amortizacao;

  /*Calculo dos incices*/
  const calcularMargemBruta = (lucroBruto, faturamento) => {
    let mediaBruta = 0;
    mediaBruta = (lucroBruto / faturamento) * 100;

    //toFixed(2) para corrigir a notação de numeros reais para 2 dígitos após .00
    //Está sendo utilizado a template lyterals representado por `` para facilidar a concateção e uso de lógica JavaScript com a estrutura ${}
    console.log(`Resultado da média bruta: ${mediaBruta.toFixed(2)}%`);
  };

  const calcularMargemEBITDA = (EBITDA, faturamento) => {
    const mediaEBITDA = (EBITDA / faturamento) * 100;
    console.log(`Resultado da média EBITDA: ${mediaEBITDA.toFixed(2)}%`);
  };

  const resultadoIndices = (
    qtdProdutos,
    produtosVendidos,
    preco,
    custoUnidade,
    despesas,
    receitas,
    depreciacao,
    amortizacao
  ) => {
    const resultadoReceita = receita(qtdProdutos, preco);

    const resultadoCustoVariavel = custosVariaveis(qtdProdutos, custoUnidade);
    const resultadoLucroBruto = lucroBruto(
      resultadoReceita,
      resultadoCustoVariavel
    );

    const resultadoFaturamento = faturamento(produtosVendidos, preco);

    const resultadoLucroOperacional = lucroOperacional(despesas, receitas);

    const resultadoEBITDA = calcularEBITDA(
      resultadoLucroOperacional,
      amortizacao,
      depreciacao
    );

    calcularMargemBruta(resultadoLucroBruto, resultadoFaturamento);
    calcularMargemEBITDA(resultadoEBITDA, resultadoFaturamento);
  };

  const calcularIndices = (e) => {
    e.preventDefault();
    //Convertendo os valodes de string para números.
    const toNumberQtdProduto = Number.parseFloat(
      //Trocando vígula por ponto para poder utilizar o padrão brasileiro de números reais por baixo dos panos.
      qtdProduto.value.replace(",", ".")
    );
    const toNumberProdutosVendidos = Number.parseFloat(
      produtosVendidos.value.replace(",", ".")
    );
    const toNumberPrecoVenda = Number.parseFloat(
      precoVenda.value.replace(",", ".")
    );
    const toNumberCustoUnidade = Number.parseFloat(
      custoUnidade.value.replace(",", ".")
    );

    const toNumberDespesaOp = Number.parseFloat(
      despesaOp.value.replace(",", ".")
    );

    const toNumberReceitaOp = Number.parseFloat(
      receitaOp.value.replace(",", ".")
    );

    const toNumberDepreciacao = Number.parseFloat(
      depreciacao.value.replace(",", ".")
    );

    const toNumberAmortizacao = Number.parseFloat(
      amortizacao.value.replace(",", ".")
    );

    //Execução das funções e armazenamento dos valores em variáveis.
    resultadoIndices(
      toNumberQtdProduto,
      toNumberProdutosVendidos,
      toNumberPrecoVenda,
      toNumberCustoUnidade,
      toNumberDespesaOp,
      toNumberReceitaOp,
      toNumberDepreciacao,
      toNumberAmortizacao
    );
    //Executando o calculo dos índices
  };

  formulario.addEventListener("submit", calcularIndices);
})();
