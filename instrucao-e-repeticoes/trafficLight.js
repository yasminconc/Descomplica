
function checkTrafficLight(lightColor) {
    
    switch (lightColor) {
        case 'verde':
            console.log('Pode atravessar')
            break
        case 'amarelo':
            console.log('Prepare-se para parar')
            break
        case 'vermelho':
            console.log('Pare')
            break
        default:
            console.log('Cor inválida')
            
    }
}

checkTrafficLight('amarelo')