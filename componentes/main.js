import adicionarAtaque from './adicionarAtaque.js'
import adicionarItem from './adicionarItem.js'

const novoAtaque = document.querySelector('[data-form-button]')
novoAtaque.addEventListener('click', adicionarAtaque)

const novoItem = document.querySelector('[data-form-button-2]')
novoItem.addEventListener('click', adicionarItem)

const colapse = document.getElementById('colapse')
const navUl = document.getElementById('saving')
colapse.addEventListener('click', () => {
    navUl.classList.toggle('show')
})

const dots = document.querySelectorAll("span.dot")
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        dot.classList.toggle('black')
    })
})