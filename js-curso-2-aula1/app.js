let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famele', {rate: 1.2});
}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!');
        // quero que retorne TENTATIVAS ou TENTATIVA.
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagensTentativas);
        //serve para ativar o botão
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p' , 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
//Serve para Limpar um campo/caixa de texto.
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //quando vc deseja desabilitar um botão
}




/*function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

FEITO PARA DESABILITAR UM BUTÃO:
document.getElementById('').removeAttribute('disabled');

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo Numero Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/