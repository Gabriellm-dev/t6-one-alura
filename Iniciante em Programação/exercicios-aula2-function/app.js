function helloWorld(){
    console.log("Hello World");
}
helloWorld();

function helloName(name){
    console.log("Hello " + name);
}
helloName("Lucas");

function num(num1){
    console.log(num1 + num1);
}
num(5);

function mediaTres(num1, num2, num3){
    console.log((num1 + num2 + num3) / 3);
}
mediaTres(5, 10, 15);

function numMaior(num1, num2){
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}
numMaior(5, 10);

function multipliNum(num){
    console.log(num * num);
}
multipliNum(5);

function indiceImc(peso, altura){
    let imc = peso / (altura * altura);
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal");
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso");
    }else if(imc >= 30 && imc <= 34.9){
        console.log("Obesidade grau 1");
    }else if(imc >= 35 && imc <= 39.9){
        console.log("Obesidade grau 2");
    }else{
        console.log("Obesidade grau 3");
    }
    return imc;
}
indiceImc(80, 1.80);

function fatorial(num){
    let result = 1;
    for(let i = num; i > 1; i--){
        result *= i;
    }
    console.log(result);
}
fatorial(5);

function dolarReal(dolar){
    let real = dolar * 4.80;
    console.log(real);
}
dolarReal(10);

function perimetroRetangulo(base, altura){
    let perimetro = (base + altura) * 2;
    console.log(perimetro);
}
perimetroRetangulo(5, 10);

function areaCirculo(raio){
    let area = Math.PI * (raio * raio);
    console.log(area);
}
areaCirculo(5);

function tabuada(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + num * i);
    }
}
tabuada(5);