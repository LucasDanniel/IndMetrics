//na importação o use strict é padrão com isso não se faz necessário colocar o código no modo estrito na primeira linha.
import {
  formulario,
  patrimonioLiquido,
  lucroLiquido,
  lucroBruto,
  ebitda,
  receitaTotal,
  ganho,
  investimentoAportado,
  dividaLiquida,
  ativoCirculante,
  realizavelLongoPrazo,
  estoque,
  passivoCirculante,
  naoCirculante,
  disponibilidades,
} from "./valoresInputs.js";

import {
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
} from "./formulas.js";

//Função alto invocável, tem como funcionalidade evitar poluição do escopo global e alguns erros.
(() => {
  //"use strict";
  //Use strict não permite variáveis sem declaração Ex: x = 10 chamando x da um erro.
  //Pode ser colocado em qualquer parte do código, mas para funcionar de forma global tem que estar na primeira linha afetando todo o código.
  //Tem como regra que todas as variáveis obrigatóriamente sejam declaradas Ex:  const x = 10 Não pode ser alterado o valor e let x = 20 Pode ser alterado x = 25 agora o x tem o valor de 25.

  //Função de evento para calcular os indicadores financeiros.
  const calcularIndices = (event) => {
    //event.preventDefault impede o carregamento da página.
    event.preventDefault();

    //Convertendo os valodes de string para números.
    const toNumberLucroLiquido = Number.parseFloat(
      //Trocando vígula por ponto para poder utilizar o padrão brasileiro de números reais por baixo dos panos.
      lucroLiquido.value.replace(",", ".")
    );
    const toNumberLucroBruto = Number.parseFloat(
      lucroBruto.value.replace(",", ".")
    );

    const toNumberEbitda = Number.parseFloat(ebitda.value.replace(",", "."));

    const toNumberReceitaTotal = Number.parseFloat(
      receitaTotal.value.replace(",", ".")
    );
    const toNumberGanho = Number.parseFloat(ganho.value.replace(",", "."));

    const toNumberInvestimentoAportado = Number.parseFloat(
      investimentoAportado.value.replace(",", ".")
    );

    const toNumberPatrimonioLiquido = Number.parseFloat(
      patrimonioLiquido.value.replace(",", ".")
    );
    const toNumberDividaLiquida = Number.parseFloat(
      dividaLiquida.value.replace(",", ".")
    );
    const toNumberAtivoCirculante = Number.parseFloat(
      ativoCirculante.value.replace(",", ".")
    );

    const toNumberRealizavelLongoPrazo = Number.parseFloat(
      realizavelLongoPrazo.value.replace(",", ".")
    );
    const toNumberEstoque = Number.parseFloat(estoque.value.replace(",", "."));

    const toNumberPassivoCirculante = Number.parseFloat(
      passivoCirculante.value.replace(",", ".")
    );
    const toNumberNaoCirculante = Number.parseFloat(
      naoCirculante.value.replace(",", ".")
    );
    const toNumberDisponibilidades = Number.parseFloat(
      disponibilidades.value.replace(",", ".")
    );

    const arrValores = [
      toNumberLucroLiquido,
      toNumberLucroBruto,
      toNumberEbitda,
      toNumberReceitaTotal,
      toNumberGanho,
      toNumberInvestimentoAportado,
      toNumberPatrimonioLiquido,
      toNumberDividaLiquida,
      toNumberAtivoCirculante,
      toNumberRealizavelLongoPrazo,
      toNumberEstoque,
      toNumberPassivoCirculante,
      toNumberNaoCirculante,
      toNumberDisponibilidades,
    ];

    //Execuções das funções e armazenamento dos retornos delas em variáveis.
    const margemLiquida = calcularMargemLiquida(
      toNumberLucroLiquido,
      toNumberReceitaTotal
    );
    const margemBruta = calcularMargemBruta(
      toNumberLucroBruto,
      toNumberReceitaTotal
    );
    const margemEBITDA = calcularMargemEBITDA(
      toNumberEbitda,
      toNumberReceitaTotal
    );
    const roi = calcularROI(toNumberGanho, toNumberInvestimentoAportado);
    const roe = calcularROE(toNumberLucroLiquido, toNumberPatrimonioLiquido);
    const alavancagem = calculoAlavancagem(
      toNumberDividaLiquida,
      toNumberEbitda
    );
    const liquidezCrt = liquidezCorrente(
      toNumberAtivoCirculante,
      toNumberPassivoCirculante
    );
    const liquidezSec = liquidezSeca(
      toNumberAtivoCirculante,
      toNumberEstoque,
      toNumberPassivoCirculante
    );
    const liquidezImd = liquidezImediata(
      toNumberDisponibilidades,
      toNumberPassivoCirculante
    );
    const liquidezGer = liquidezGeral(
      toNumberAtivoCirculante,
      toNumberRealizavelLongoPrazo,
      toNumberPassivoCirculante,
      toNumberNaoCirculante
    );

    //Inserindo resultados dentro do modal.
    const corpoDoModal = document.querySelector(".modal-body");
    arrValores.map((valores) => {
      //Se não existir nenhum valor, deixa o corpo do modal vazio.
      if (!valores) {
        corpoDoModal.innerHTML = "";
      } else {
        //Caso exista, cria uma tag span com todos os resultados.
        corpoDoModal.innerHTML = `
        <span class="fw-bold">${margemLiquida}</span>
        <br/>
        <span class="fw-bold">${margemBruta}</span>
        <br/>
        <span class="fw-bold">${margemEBITDA}</span>
        <br/>
        <span class="fw-bold">${roi}</span>
        <br/>
        <span class="fw-bold">${roe}</span>
        <br/>
        <span class="fw-bold">${alavancagem}</span>
        <br/>
        <span class="fw-bold">${liquidezCrt}</span>
        <br/>
        <span class="fw-bold">${liquidezSec}</span>
        <br/>
        <span class="fw-bold">${liquidezImd}</span>
        <br/>
        <span class="fw-bold">${liquidezGer}</span>
        <br/>
        `;
      }
    });
  };

  //Resetando conteúdo dentro do corpo do modal.
  const modalContainer = document.querySelector("#resultados");
  const corpoDoModal = document.querySelector(".modal-body");
  const fecharModal = document.querySelector(".btn-close");

  modalContainer.addEventListener("click", function (e) {
    if (e.target === modalContainer) {
      corpoDoModal.innerHTML = "";
    }
  });

  fecharModal.addEventListener("click", function () {
    corpoDoModal.innerHTML = "";
  });

  const btnFecharModal = document.querySelector("#close-modal");
  btnFecharModal.addEventListener("click", function () {
    corpoDoModal.innerHTML = "";
  });

  //Pegando todos os formulários através do seletor de classe.
  const forms = document.querySelectorAll(".needs-validation");

  // Função da documentação bootstraps para validar o formulário.
  Array.prototype.slice.call(forms).forEach(function (form) {
    const modalContainer = document.querySelector("#resultados");

    //Função para impedir o modal de abrir enquanto os dados do formulário não estiverem preenchidos.
    modalContainer.addEventListener("show.bs.modal", function (event) {
      if (!form.checkValidity()) {
        return event.preventDefault();
      }
    });
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  //Escutador de evento para enviar o formulário.
  formulario.addEventListener("submit", calcularIndices);
})();
