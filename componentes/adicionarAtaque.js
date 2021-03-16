const adicionarAtaque = (evento) => {
    evento.preventDefault()
    
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const tarefa = document.createElement('li')
    const conteudo = `<p>${valor}</p>`
    tarefa.innerHTML = conteudo
    
    lista.appendChild(tarefa)
    input.value = ""
    return adicionarAtaque
}

export default adicionarAtaque