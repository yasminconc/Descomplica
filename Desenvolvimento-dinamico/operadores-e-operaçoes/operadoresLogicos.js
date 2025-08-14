

//(&&)

const a = true
const b = false

const resultadoE1 = a && b
const resultadoE2 = a && true

console.log(`true && false: ${resultadoE1}`) //Saída false
console.log(`true && false: ${resultadoE2}`) //Saída true


//(||)
const resultadoOU1 = a || b
const resultadoOU2 = a || false

console.log(`true && false: ${resultadoOU1}`) //Saída false
console.log(`false && false: ${resultadoOU2}`) 


// (!)
const resultadoNao1 = !a
const resultadoNao2 = !b


console.log(`!true: ${resultadoNao1}`) //Saída true
console.log(`!false: ${resultadoNao2}`) //Saída true




