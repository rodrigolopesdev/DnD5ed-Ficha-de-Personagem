import adicionarAtaque from './adicionarAtaque.js'
import adicionarItem from './adicionarItem.js'
import modificadores from './modificadores.js'

const novoAtaque = document.querySelector('[data-form-button]')
novoAtaque.addEventListener('click', adicionarAtaque)

const novoItem = document.querySelector('[data-form-button-2]')
novoItem.addEventListener('click', adicionarItem)

const dots = document.querySelectorAll('span.dot')
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dot.classList.toggle('black')
    })
})

const modificador = document.querySelector('[data-mod]')
modificador.addEventListener('change', modificadores)


// SEM USO, Arquivar para futura referência
// const colapse = document.getElementById('colapse')
// const navUl = document.getElementById('saving')
// colapse.addEventListener('click', () => {
//     navUl.classList.toggle('show')
// })

// FUNCIONANDO
// const valNum = document.getElementById('inputModificador')
// valNum.addEventListener('change', () => {
//     const inputNum = valNum.value
//     const modCalc = Math.floor((inputNum-10)/2)
//     document.getElementById('outputModificador').innerHTML=modCalc;
// })