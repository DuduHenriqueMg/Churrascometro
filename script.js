// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

    // Functions

function calcular() {

    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePorPessoa(duracao);
    let cerveja = cervejaPorPessoa(duracao);
    let bebidas = bebidasPorPessoa(duracao);

    let qtdTotalCarne = carne * adultos + (carnePorPessoa(duracao) /2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidasPorPessoa(duracao) /2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 1000)} Litros de Bebidas</p>`
  
}

function carnePorPessoa(duracao){

    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){

    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){

    if(duracao >= 6){
        return 1000;
    }
    else{
        return 500;
    }
}
