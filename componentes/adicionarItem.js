const adicionarItem = (evento) => {
    evento.preventDefault()
    
    const lista = document.querySelector('[data-list-2]')
    const input = document.querySelector('[data-form-input-2]')
    const valor = input.value
    
    const tarefa = document.createElement('li')
    const conteudo = `<p>${valor}</p>`
    tarefa.innerHTML = conteudo
    
    lista.appendChild(tarefa)
    input.value = ""
    return adicionarItem
}

export default adicionarItem
