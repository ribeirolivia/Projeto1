let elementoHumor = document.querySelector('#humor')
let elementoImg = document.querySelector('#img')
let elementoTroca = document.querySelector('#troca')

elementoTroca.addEventListener('click', () =>{
    if(elementoTroca.value =='primeiro'){
        elementoImg.src = './assets/img/ansioso.png'
        elementoHumor.innerText = 'Tudo parece gostoso quando você está de dieta.'
        elementoTroca.value = 'segundo'
    } else if(elementoTroca.value =='segundo') {
        elementoImg.src = './assets/img/bravo.png'
        elementoHumor.innerText = 'Qualquer movimento em falso que faças na direção da minha comida pode te meter em problemas, rapaz!'
        elementoTroca.value = 'terceiro'
    } else if(elementoTroca.value == 'terceiro') {
        elementoImg.src = './assets/img/garfieldOdie.png'
        elementoHumor.innerText = 'Vai pegar Odie!'
        elementoTroca.value = 'quarto'
    } else if(elementoTroca.value == 'quarto'){
        elementoImg.src = './assets/img/sono.png'
        elementoHumor.innerText = 'Eu adoraria as manhãs, se elas começassem mais tarde!'
        elementoTroca.value = 'quinto'
    }else if(elementoTroca.value == 'quinto') {
        elementoImg.src = './assets/img/satisfeito.gif'
        elementoHumor.innerText = 'Dormir dá fome, comer dá sono... A vida é bela.'
        elementoTroca.value = 'sexto'
    } else {
        elementoImg.src = './assets/img/cansado.gif'
        elementoHumor.innerText = 'Odeio as Segundas-feiras!'
        elementoTroca.value ='primeiro'
    }
})
 