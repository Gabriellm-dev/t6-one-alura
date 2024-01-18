
// Projeto dos videos:
alert('Boas vindas ao jogo do número secreto !!!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Enquanto o numero Escolhido não for igual ao numero secrreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se chute for igual ao numero secreto: 
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

let palavraPessoa = quantidadePessoas == 1 ? 'pessoa' : 'pessoas';

/*
if (tentativas > 1) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentatiivas`);
} else {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentatiiva`);
}
*/


// Exercícios propostos:

/*alert('Boas vindas ao nosso site!');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');

let = mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt('Qual o seu nome ?');

idade = prompt('Qual a sua idade ?');

if (idade >= 18){
    alert('Pode tirar a habilitação!');
} else{
    alert('Você não pode tirar a habilitação!');
}

*/


// Exercícios propostos 2:

/* let day = prompt('Que dia é hoje ?');

if (day == 'Sábado' || day == 'Domingo'){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numero = prompt('Digite um número');
if(numero > 0){
    alert('Numero positivo');
} else {
    alert('Numero negativo');
}

let pontuacao = prompt('Digite a sua pontuação.');
if(pontuacao >= 100) {
    alert('Parabéns você venceu!');
} else {
    alert('Tente novamente!');
}

let saldoDaConta = 0;
saldoDaConta = prompt('Digite o saldo da conta');
alert('Saldo da conta = ' + saldoDaConta);

let nome = prompt('Digite o seu nome: ');
alert('Boas vindas ' + nome);

*/

/*
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);
*/

// Atividade não obrigatoria 3
/*
let numero = 1;

while (numero <= 10){
    alert(numero);
    numero++;
}
*/
/*
let numero2 = 10;
while (numero > 0){
    alert(numero);
    numero--;
}


num = prompt('Digite um número');
while (num >=0) {
    alert(num);
    num--;
}
*/
