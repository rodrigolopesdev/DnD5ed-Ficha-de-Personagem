const modificadores = (evento) => {
    evento.preventDefault()
    
    const valNum = document.querySelector('[data-mod]')
    const inputNum = valNum.value
    const modCalc = Math.floor((inputNum-10)/2)
    outputModificador.innerHTML = modCalc;

return modificadores
}

export default modificadores