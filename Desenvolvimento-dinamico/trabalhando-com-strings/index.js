
//Exemplo de uso de método slice()
//Temos uma string com várias frutas
 
let frutas = 'maçã, banana, laranja, uva, abacaxi'
console.log('Tamanho da string frutas:', frutas.length)

//Queremos obter uma parte da string, por exemplo, apenas 'banana, laranja'

let parteFrutas = frutas.slice(5,21)
console.log('resultado do slice', parteFrutas)

//Exemplo de uso de método trim()
//Temos uma string com espaços em branco no início e no final

let frutaComEspaco = '   abacate    '

//Queremos remover os espaços em branco do início e do final da string

let frutasSemEspaco = frutaComEspaco.trim()
console.log('Resultado do trim', frutasSemEspaco)


//Exemplo de uso do método split()
//Temos uma string com várias frutas separadas por vírgula

let listaDeFrutas = 'maçã, banana, laranja, uva, abacaxi'

//Queremos dividir a string em um array de substrings, usando a virgula como separador
let arrayDeFrutas = listaDeFrutas.split(",")
console.log('Resultado do split', arrayDeFrutas)


//Criação de strings com nomes de animais
let animal1 = 'Elefante'
let animal2 = 'Girafa'
let animal3 = 'Zebra'

// Exemplo do método substring
// Pega parte da string 'Elefante', começando no índice 3 até o índice 7

let parteAnimal1 = animal1.substring(3,7)
console.log('Resultado substring', parteAnimal1)


//Exemplo do método replace
//Substitui a substring 'ra' por 're' em 'Girafa'

let novoAnimal2 = animal2.replace('ra', 're')
console.log('resultado replace', novoAnimal2);


//Exemplo de método concat
//Concatena as strings 'Elefante', 'Girafa' e 'Zebra' com espaços entre elas
 
let animaisJuntos = animal1.concat("", animal2, "", animal3)
console.log('Resultado concat', animaisJuntos)


let nome = 'Ana Teixeira'

let nomeMinusculo = nome.toLowerCase()

let nomeMaisculo = nome.toUpperCase()

let stringComSimbolos = 'Ana Cristina 415'

let minusculoSimnbolos = stringComSimbolos.toLowerCase()

let maiusculoSimbolos = stringComSimbolos.toUpperCase()


