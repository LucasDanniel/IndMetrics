//na importação o use strict é padrão com isso não se faz necessário colocar o código no modo estrito na primeira linha."

//Comentário para quando passar o mause em cima do parâmetro.

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
//Função alto invocável, tem como funcionalidade evitar poluição do escopo global e alguns erros.

(() => {
  //"use strict";
  //Use strict não permite variáveis sem declaração Ex: x = 10 chamando x da um erro.
  //Pode ser colocado em qualquer parte do código, mas para funcionar de forma global tem que estar na primeira linha afetando todo o código.
  //Tem como regra que todas as variáveis obrigatóriamente sejam declaradas Ex:  const x = 10 Não pode ser alterado o valor e let x = 20 Pode ser alterado x = 25 agora o x tem o valor de 25.

  /*Calculo dos incices*/
  /**
   * @param lucroLiquido:  Calculo de margemLiquida.
   */

  //Indicadores financeiros de rentabilidade
  const calcularMargemLiquida = (lucroLiquido, receitaTotal) => {
    const margemLiquida = (lucroLiquido / receitaTotal) * 100;
    //toFixed(2) para corrigir a notação de numeros reais para 2 dígitos após .00
    //Está sendo utilizado a template lyterals representado por `` para facilidar a concateção e uso de lógica JavaScript com a estrutura ${}
    return `Resultado da média bruta: ${margemLiquida.toFixed(2)}%`;
  };
  const calcularMargemBruta = (lucroBruto, receitaTotal) => {
    const margemBruta = (lucroBruto / receitaTotal) * 100;
    //toFixed(2) para corrigir a notação de numeros reais para 2 dígitos após .00
    //Está sendo utilizado a template lyterals representado por `` para facilidar a concateção e uso de lógica JavaScript com a estrutura ${}
    return `Resultado da média bruta: ${margemBruta.toFixed(2)}%`;
  };

  const calcularMargemEBITDA = (EBITDA, receitaTotal) => {
    const mediaEBITDA = (EBITDA / receitaTotal) * 100;
    return `Resultado da média EBITDA: ${mediaEBITDA.toFixed(2)}%`;
  };

  const calcularROI = (ganho, investimentoAportado) => {
    const totalRoi =
      ((ganho - investimentoAportado) / investimentoAportado) * 100;
    return `Resultado do ROI: ${totalRoi.toFixed(2)}%`;
  };

  const calcularROE = (lucroLiquido, ptrimonioLiquido) => {
    const totalRoe = (lucroLiquido / ptrimonioLiquido) * 100;
    return `Resultado ROE: ${totalRoe.toFixed(2)}%`;
  };

  //Indicadores financeiros de endividamento
  const calculoAlavancagem = (dividaLiquida, EBITDA) => {
    const resultadoAlavancagem = (dividaLiquida / EBITDA) * 100;
    return `Resultado endividamento: ${resultadoAlavancagem.toFixed(2)}%`;
  };

  //Indicadores financeiros de Liquidez
  const liquidezCorrente = (ativoCirculante, passivoCirculante) => {
    const resultadoLiquidezCorrente = ativoCirculante / passivoCirculante;
    //Se o resultado for superior a 1, em geral, significa que a empresa dispõe de recursos para fazer frente aos compromissos de curto prazo.
    return `Está com dívidas: ${resultadoLiquidezCorrente.toFixed(2)}`;
  };

  const liquidezSeca = (ativoCirculante, estoque, passivoCirculante) => {
    const resultadoLiquidezSeca =
      (ativoCirculante - estoque) / passivoCirculante;
    return `Resultado liquidez seca: ${resultadoLiquidezSeca.toFixed(2)}`;
  };

  const liquidezImediata = (disponibilidades, passivoCirculante) => {
    const resultadoLiquidezImediata = disponibilidades / passivoCirculante;

    return `Resultado liquidez imediata: ${resultadoLiquidezImediata.toFixed(
      2
    )}`;
  };

  const liquidezGeral = (
    ativoCirculante,
    realizavelLongoPrazo,
    passivoCirculante,
    naoCirculante
  ) => {
    const resultadoLiquidezGeral =
      (ativoCirculante + realizavelLongoPrazo) /
      (passivoCirculante + naoCirculante);

    return `Resultado liquidez geral: ${resultadoLiquidezGeral.toFixed(2)}`;
  };

  const calcularIndices = (event) => {
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

    //Execução das funções e armazenamento dos valores em variáveis.
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

    if (toNumberLucroLiquido) {
      corpoDoModal.innerHTML = `<span>${margemLiquida}</span>`;
    } else {
      corpoDoModal.innerHTML = "";
    }

    //Resetar resultado do modal
    const fecharModalX = document.querySelector(".btn-close");
    fecharModalX.addEventListener("click", function () {
      corpoDoModal.innerHTML = "";
    });
  };

  //Pegando todos os formulários através do seletor de classe.
  const forms = document.querySelectorAll(".needs-validation");

  // Função da documentação bootstraps para validar o formulário.
  Array.prototype.slice.call(forms).forEach(function (form) {
    const myModal = document.getElementById("resultados");

    //Função para impedir o modal de abrir enquanto os dados do formulário não estiverem preenchidos.
    myModal.addEventListener("show.bs.modal", function (event) {
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
          // <div class="valid-feedback">Campo preenchido corretamente.</div>
          // <div class="invalid-feedback">Campo vazio preencha corretamente.</div>
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  formulario.addEventListener("submit", calcularIndices);
})();
