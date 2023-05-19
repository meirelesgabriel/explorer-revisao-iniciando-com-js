// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// window.alert('Hello World!')

document.getElementById("atv1").innerHTML = 'Hello World!';


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let num1 = 2;
let num2 = 3;

document.getElementById("atv2").innerHTML = `A soma das variáveis num1 (valor: ${num1}) e num2 (valor: ${num2}) é igual a ${num1 + num2}.`;

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".


let teste = 10
if (typeof teste === "number") {
    document.getElementById("atv3").innerHTML = `A variável teste1 (valor: ${teste}) é um número.`
} else {
    document.getElementById("atv3").innerHTML = `A variável teste1 (valor: '${teste}') não é um número.`
}



// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let teste2 = 0
if (typeof teste2 == 'string') {
    document.getElementById("atv4").innerHTML = `A variável teste2 (valor: ${teste2}) é uma string`
} else {
    document.getElementById("atv4").innerHTML = `A variável teste2 (valor: ${teste2}) não é uma string`
}

// dúvida:
// qual a diferença entre os comparadores == e === ?

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let teste3 = undefined
if (typeof teste3 === 'boolean') {
    document.getElementById("atv5").innerHTML = `A variável teste3 (valor: ${teste3}) é do tipo booleano.`
} else {
    document.getElementById("atv5").innerHTML = `A variável teste3 (valor: ${teste3}) não é do tipo booleano.`
}


// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let num3 = 10
let num4 = 7
document.getElementById("atv6").innerHTML = `A subtração da variável num3 (valor: ${num3}) por num4 (valor: ${num4}) é igual a ${num3 - num4}`


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let num5 = 6
let num6 = 9
document.getElementById("atv7").innerHTML = `A multiplicação das variáveis num5 (valor: ${num5}) e num6 (valor: ${num6}) é igual a ${num5 * num6}`


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num7 = 81
let num8 = 3
document.getElementById("atv8").innerHTML = `A divisão da variável num7 (valor: ${num7}) por num8 (valor: ${num8}) é igual a ${num7 / num8}`


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let num9 = 17
if (num9 % 2 == 0) {
    document.getElementById("atv9").innerHTML = `O valor da variável num9 (valor: ${num9}) é par.`
} else {
    document.getElementById("atv9").innerHTML = `O valor da variável num9 (valor: ${num9}) não é par.`
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let num10 = 9
if(num10 % 2 !== 0) {
    document.getElementById("atv10").innerHTML = `O valor da variável num10 (valor: ${num10}) é ímpar.`
} else {
    document.getElementById("atv10").innerHTML = `O valor da variável num10 (valor: ${num10}) não é ímpar.`
}
