//Pegar valores dos inputs através do JavaScript utilizando o DOM.
const formulario = document.querySelector("#indicadores");
const patrimonioLiquido = document.querySelector("#patrimonioLiquido");
const lucroLiquido = document.querySelector("#lucroLiquido");
const lucroBruto = document.querySelector("#lucroBruto");
const receitaTotal = document.querySelector("#receitaTotal");
const ebitda = document.querySelector("#ebitda");
const ganho = document.querySelector("#ganho");
const investimentoAportado = document.querySelector("#investimentoAportado");
const dividaLiquida = document.querySelector("#dividaLiquida");
const ativoCirculante = document.querySelector("#ativoCirculante");
const realizavelLongoPrazo = document.querySelector("#realizavelLongoPrazo");
const estoque = document.querySelector("#estoque");
const passivoCirculante = document.querySelector("#passivoCirculante");
const naoCirculante = document.querySelector("#naoCirculante");
const disponibilidades = document.querySelector("#disponibilidades");

//Exportação dos valores para enviao ao arquivo indicesFinanceiros.js
export {
  formulario,
  patrimonioLiquido,
  lucroLiquido,
  lucroBruto,
  ebitda,
  ganho,
  investimentoAportado,
  receitaTotal,
  dividaLiquida,
  ativoCirculante,
  realizavelLongoPrazo,
  estoque,
  passivoCirculante,
  naoCirculante,
  disponibilidades,
};
