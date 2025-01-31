//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirResultadoNaTela(texto) {
    let campo = document.getElementById('resultado');
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let amigoAdd = document.querySelector('input').value;
    if (amigoAdd.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    } else {
        amigos.push(amigoAdd);
        exibirListaAmigos();
    }

    limparCampo();
}

function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    amigos.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    });
}

function limparCampo() {
    amigoAdd = document.querySelector('input');
    amigoAdd.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    exibirResultadoNaTela(`O amigo sorteado foi: ${amigoSorteado}`);
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';
}

document.getElementById('reiniciar').addEventListener('click', reiniciar);
