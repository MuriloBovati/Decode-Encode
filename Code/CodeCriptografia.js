const texto = document.querySelector('.textoCode')
const resultado = document.querySelector('.resultado')
const buttonCript = document.querySelector('.cript')
const buttonDescript = document.querySelector('.descript')


const criptografar = () => {
    resultado.innerHTML = 'criptografar'
}

const descriptografar = () => {
    resultado.innerHTML = 'descriptografar'
}

buttonCript.addEventListener("click", criptografar)
buttonDescript.addEventListener("click", descriptografar)
