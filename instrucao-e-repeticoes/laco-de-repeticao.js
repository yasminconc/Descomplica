
//Imagine que vc é um entregador de pizza em uma cidade com várias ruas numeradas de 1 a 10
//Vc tem que entregar uma pizza em cada rua, começando da rua 1 até rua 10

//Aqui, usaremos um loop for para simular esse processo:


for (let rua = 1; rua <= 10; rua++) {
    console.log('entrega feita na rua', rua);
    
}


//Imagine que vc está fazendo execicios fisicos para se manter saudavel
//vc decide fazer flexoes ate ficar cansado

//Aqui, usaremos um loop while para simular esse processo:

let quantidadeDeFlexoes = 0
let cansaco = false

while (!cansaco) {
    quantidadeDeFlexoes++
    console.log('Fiz', quantidadeDeFlexoes, 'flexões!');
    
    if(quantidadeDeFlexoes === 10){
        cansaco = true
    }
}


//Imagine que vc esta tentando aprender a andar de bicicleta
//vc decide praticar ate conseguir andar por pelo menos 1 minuto sem cair

//Aqui, usaremos um loop do.. while para simular esse processo

let tempoDeAndar = 0
let caiu = false


do {
    tempoDeAndar++
    console.log('Andei de biclicleta por', tempoDeAndar, 'minutos')

    if(tempoDeAndar === 3){
        caiu = true
    }
    
} while (!caiu && tempoDeAndar < 10);