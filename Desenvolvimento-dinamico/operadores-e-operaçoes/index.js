

//Função que simula a operação de uma calculadora
function calculadora(num1, num2) {
    
    //Operações aritméticas básicas
        let adicao = num1 + num2
        let subtracao = num1 - num2
        let multiplicacao = num1 * num2
        let divisao = num1 / num2
        let modulo = num1 % num2
        let exponencial = num1 ** num2
       
        

    //Incremento e Decremento
        let incrementar = num1 
        incrementar ++

    //Vamos incrementar num1
        let decrementar = num2
        decrementar --

    //Vamos decrementar num2
    

    //Exibindo os resultados no console
    console.log(`Adição (${num1} + ${num2}) = ${adicao}`)
    console.log(`subtração (${num1} - ${num2}) = ${subtracao}`)
    console.log(`multiplicacao (${num1} * ${num2}) = ${multiplicacao}`)
    console.log(`divisao (${num1} / ${num2}) = ${divisao}`)
    console.log(`módulo (${num1} % ${num2}) = ${modulo}`)
    console.log(`exponencial (${num1} ** ${num2}) = ${exponencial}`)
    console.log(`incrementar (${num1} ++ ${num2}) = ${incrementar}`)
    console.log(`decrementar (${num1} -- ${num2}) = ${decrementar}`)
    
}

//Executando a função calculadora

calculadora(10, 5)