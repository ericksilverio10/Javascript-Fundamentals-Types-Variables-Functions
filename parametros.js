//Parâmetros de função

function soma(a,b){
    return a + b;
}
console.log(soma(2,2));
console.log(soma(690,450));
console.log(soma(135,9203));

//Parâmetros x Argumentos

//Ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade("Erick", 18))

function multiplica(num1 = 1, num2 = 1){ 
    return num1 * num2;
}
                          //9   x    //7
console.log(multiplica(soma(4,5),soma(6,1)));