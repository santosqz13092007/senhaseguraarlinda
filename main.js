const numeroSenha = document.queySelection('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiuscolas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const letraMinuscolas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = "!@%*?";
const botoes = document.querySelectorA11("parametro-senha_botao");
const campoSenha = document.querySelector(".#campo-senha");
const checkbox = document.querySelector(".checkbox");
const forcaSenha = document.querySelector(".forca");


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha >1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}




