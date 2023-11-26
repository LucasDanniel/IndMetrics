/*Informações dos indices contábeis.*/
//Comentário para quando passar o mause em cima do parâmetro.
/**
 * @param lucroLiquido  O lucro líquido é o resultado financeiro de uma empresa após subtrair todas as despesas e impostos do total de receitas. Ele representa o valor que uma empresa realmente ganhou em um determinado período, levando em consideração todas as suas obrigações financeiras.
 * @param receitaTotal  A receita total é a soma de todas as receitas geradas por uma empresa em um determinado período de tempo, normalmente um ano. Ela inclui todas as fontes de receita, independentemente de sua origem ou tipo.
 */

//Indicadores financeiros de rentabilidade
const calcularMargemLiquida = (lucroLiquido, receitaTotal) => {
  const margemLiquida = (lucroLiquido / receitaTotal) * 100;
  //toFixed(2) para corrigir a notação de numeros reais para 2 dígitos após .00
  //Está sendo utilizado a template lyterals representado por `` para facilidar a concateção e uso de lógica JavaScript com a estrutura ${}
  return `Indicador de média liquida: ${margemLiquida.toFixed(2)}%`;
};

/**
 * @param lucroBruto   O lucro bruto, também conhecido como lucro operacional bruto, é o resultado da conta do que a empresa obtém de receita, menos os gastos variáveis.
 * @param receitaTotal  A receita total é a soma de todas as receitas geradas por uma empresa em um determinado período de tempo, normalmente um ano. Ela inclui todas as fontes de receita, independentemente de sua origem ou tipo.
 */
const calcularMargemBruta = (lucroBruto, receitaTotal) => {
  const margemBruta = (lucroBruto / receitaTotal) * 100;
  //toFixed(2) para corrigir a notação de numeros reais para 2 dígitos após .00
  //Está sendo utilizado a template lyterals representado por `` para facilidar a concatenação e uso de lógica JavaScript com a estrutura ${variável}.
  return `Indicador de média bruta: ${margemBruta.toFixed(2)}%`;
};
/**
 * @param EBITDA  O uso do EBITDA permite que a empresa avalie seu potencial de crescimento, com base nos resultados atuais da companhia.
 * @param receitaTotal  A receita total é a soma de todas as receitas geradas por uma empresa em um determinado período de tempo, normalmente um ano. Ela inclui todas as fontes de receita, independentemente de sua origem ou tipo.
 */
const calcularMargemEBITDA = (EBITDA, receitaTotal) => {
  const mediaEBITDA = (EBITDA / receitaTotal) * 100;
  return `Indicador de média EBITDA: ${mediaEBITDA.toFixed(2)}%`;
};
/**
 * @param ganho  Receita gerada pelo investimento.
 * @param investimentoAportado  Valor aplicado em algum investimento.
 */
const calcularROI = (ganho, investimentoAportado) => {
  const totalRoi =
    ((ganho - investimentoAportado) / investimentoAportado) * 100;
  return `Indicador do ROI: ${totalRoi.toFixed(2)}%`;
};
/**
 * @param lucroLiquido  O lucro líquido é o resultado financeiro de uma empresa após subtrair todas as despesas e impostos do total de receitas. Ele representa o valor que uma empresa realmente ganhou em um determinado período, levando em consideração todas as suas obrigações financeiras.
 * @param ptrimonioLiquido  O patrimônio líquido (PL) representa tudo o que a empresa possui, já descontando tudo o que ela deve.
 */
const calcularROE = (lucroLiquido, ptrimonioLiquido) => {
  const totalRoe = (lucroLiquido / ptrimonioLiquido) * 100;
  return `Indicador do ROE: ${totalRoe.toFixed(2)}%`;
};

/**
 * @param dividaLiquida  A dívida líquida é um indicador obtido do resultado da soma das obrigações financeiras de uma empresa menos o valor que ela tem em caixa. De forma mais simples, poderíamos dizer que é a diferença entre todas as contas a pagar e o dinheiro disponível para isso.
 * @param EBITDA  O uso do EBITDA permite que a empresa avalie seu potencial de crescimento, com base nos resultados atuais da companhia.
 */
//Indicadores financeiros de endividamento
const calculoAlavancagem = (dividaLiquida, EBITDA) => {
  const resultadoAlavancagem = (dividaLiquida / EBITDA) * 100;
  return `Indicador de endividamento: ${resultadoAlavancagem.toFixed(2)}%`;
};
/**
 * @param ativoCirculante É o conjunto de bens e direitos que podem ser convertidos em dinheiro no considerado ano fiscal da empresa.
 * @param passivoCirculante O passivo circulante é aquele que tem relação direta com a operação de um negócio, por exemplo, pagamento de salários, pagamento de fornecedores, impostos mensais etc.
 */
//Indicadores financeiros de Liquidez
const liquidezCorrente = (ativoCirculante, passivoCirculante) => {
  const resultadoLiquidezCorrente = ativoCirculante / passivoCirculante;
  //Se o resultado for superior a 1, em geral, significa que a empresa dispõe de recursos para fazer frente aos compromissos de curto prazo.
  return `Indicador de liquidez corrente: ${resultadoLiquidezCorrente.toFixed(
    2
  )}`;
};
/**
 * @param ativoCirculante É o conjunto de bens e direitos que podem ser convertidos em dinheiro no considerado ano fiscal da empresa.
 * @param estoque Estoques referem-se aos bens mantidos pela empresa para venda no curso normal dos negócios.
 * @param passivoCirculante O passivo circulante é aquele que tem relação direta com a operação de um negócio, por exemplo, pagamento de salários, pagamento de fornecedores, impostos mensais etc.
 */
const liquidezSeca = (ativoCirculante, estoque, passivoCirculante) => {
  const resultadoLiquidezSeca = (ativoCirculante - estoque) / passivoCirculante;
  return `Indicador de liquidez seca: ${resultadoLiquidezSeca.toFixed(2)}`;
};

/**
 * @param disponibilidades Disponibilidades incluem o dinheiro em caixa da empresa e investimentos de curto prazo que podem ser rapidamente convertidos em dinheiro.
 * @param passivoCirculante O passivo circulante é aquele que tem relação direta com a operação de um negócio, por exemplo, pagamento de salários, pagamento de fornecedores, impostos mensais etc.
 */
const liquidezImediata = (disponibilidades, passivoCirculante) => {
  const resultadoLiquidezImediata = disponibilidades / passivoCirculante;

  return `Indicador de liquidez imediata: ${resultadoLiquidezImediata.toFixed(
    2
  )}`;
};
/**
 * @param ativoCirculante É o conjunto de bens e direitos que podem ser convertidos em dinheiro no considerado ano fiscal da empresa.
 * @param realizavelLongoPrazo Refere-se a ativos que serão convertidos em dinheiro ou consumidos em um período superior a um ano. Pode incluir contas a receber de longo prazo, investimentos de longo prazo, etc.
 * @param passivoCirculante O passivo circulante é aquele que tem relação direta com a operação de um negócio, por exemplo, pagamento de salários, pagamento de fornecedores, impostos mensais etc.
 * @param passivoNaoCirculante São as obrigações de longo prazo que não se espera que sejam liquidadas em um ano. Pode incluir empréstimos de longo prazo, títulos, entre outros.
 */
const liquidezGeral = (
  ativoCirculante,
  realizavelLongoPrazo,
  passivoCirculante,
  passivoNaoCirculante
) => {
  const resultadoLiquidezGeral =
    (ativoCirculante + realizavelLongoPrazo) /
    (passivoCirculante + passivoNaoCirculante);

  return `Indicador de liquidez geral: ${resultadoLiquidezGeral.toFixed(2)}`;
};

export {
  calcularMargemLiquida,
  calcularMargemBruta,
  calcularMargemEBITDA,
  calcularROI,
  calcularROE,
  calculoAlavancagem,
  liquidezCorrente,
  liquidezSeca,
  liquidezImediata,
  liquidezGeral,
};
