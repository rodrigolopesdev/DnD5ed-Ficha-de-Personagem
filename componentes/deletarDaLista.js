const DeletarDaLista = () => {

    const deletarDaLista = document.createElement('span')
    deletarDaLista.classList = 'material-icons-outlined'
    deletarDaLista.innerText = 'remove_circle_outline'
    deletarDaLista.addEventListener('click', deletarTarefa)

    return deletarDaLista
}

const deletarTarefa = (evento) => { 
    const deletarDaLista = evento.target
    const tarefaCompleta = deletarDaLista.parentElement
    tarefaCompleta.remove()

    return deletarDaLista
}

export default DeletarDaLista