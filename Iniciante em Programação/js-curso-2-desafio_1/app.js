let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarConsole(){
    console.log('O botão foi clicado');
}

function clicarAlert(){
    console.log('Eu amo JS');
}

function clicarPrompt(){
    let city = '';
    city = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${city} e lembrei de você.`);
}

function clicarSoma(){
    
    var num1 = 0;
    var num2 = 0;
    var sum = 0;

    num1 = prompt('Digite um número: ');
    num2 = prompt('Digite outro número: ');

    sum = parseInt(num1) + parseInt(num2);
    
    alert(`A soma dos dois números é: ${sum}`);
}