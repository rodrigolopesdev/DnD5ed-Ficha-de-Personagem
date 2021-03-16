import adicionarAtaque from './componentes/adicionarAtaque.js'
import adicionarItem from './componentes/adicionarItem.js'

const novoAtaque = document.querySelector('[data-form-button]')
novoAtaque.addEventListener('click', adicionarAtaque)
const novoItem = document.querySelector('[data-form-button-2]')
novoItem.addEventListener('click', adicionarItem)