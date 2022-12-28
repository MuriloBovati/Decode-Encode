const compEncode = () => {
    return{
        texto : document.querySelector('.textoCode'),
        displayResul : document.querySelector('.resultado'),
        buttonCript : document.querySelector('.cript'),
        buttonDescript : document.querySelector('.descript'),
        buttonPower : document.querySelector('.buttonPower'),
        estado: 'Desligado',
    
        iniciar(){
            this.controleGeral()
            this.controleButtons()
        },

        controleButtons(){
            this.buttonCript.addEventListener('click', e =>{
                if(this.estado == 'Ligado'){
                    this.criptografar()
                } else{
                    this.alertasUsuario(2)
                }
            })

            this.buttonDescript.addEventListener('click', e =>{
                if(this.estado == 'Ligado'){
                    this.descriptografar()
                } else{
                    this.alertasUsuario(2)
                }
            })
        },
    
        criptografar(){
            let textoCrypt = ''
            let arrayTexto = this.texto.value.split(' ')
            for(palavras in arrayTexto){
                let arrayPalavra = arrayTexto[palavras].split('')
                for(letras in arrayPalavra){
                    if(arrayTexto[palavras][letras] == 'e'){
                        textoCrypt += arrayPalavra[letras].replace('e', 'enter')
                    } else
                    if(arrayTexto[palavras][letras] == 'i'){
                        textoCrypt += arrayPalavra[letras].replace('i', 'imes')
                    } else
                    if(arrayTexto[palavras][letras] == 'a'){
                        textoCrypt += arrayPalavra[letras].replace('a', 'ai')
                    } else
                    if(arrayTexto[palavras][letras] == 'o'){
                        textoCrypt += arrayPalavra[letras].replace('o', 'ober')
                    } else
                    if(arrayTexto[palavras][letras] == 'u'){
                        textoCrypt += arrayPalavra[letras].replace('u', 'ufat')
                    } else {
                        textoCrypt += arrayTexto[palavras][letras]
                    }
                } textoCrypt += ' '
            }
            this.slowText(textoCrypt, this.displayResul, 1)
            console.log(textoCrypt)
        },
    
        descriptografar(){
            this.displayResul.innerHTML = 'descriptografar'
        },

        controleGeral(){
            this.texto.addEventListener('click', e =>{
                if(this.estado == 'Desligado'){
                    this.texto.value = ''
                    this.alertasUsuario(1)
                }
            })
            this.buttonPower.addEventListener('click', e =>{
                if(this.estado == 'Desligado'){
                    this.estado = 'Ligado'
                    this.texto.placeholder = ''
                    this.texto.className = "textoCode telaLigando"
                    this.displayResul.className = "resultado telaLigando"
                    const textoInicial = 'Digite oque deseja criptografar aqui!'
                    this.slowText(textoInicial, this.texto, 'place')

                } else{
                    this.estado = 'Desligado'
                    this.texto.className = "textoCode telaDesligando"
                    this.displayResul.className = "resultado telaDesligando"
                    this.displayResul.innerHTML = ''
                    this.texto.placeholder = ''
                }
            })
        },

        slowText(str, el, type){
            var char = str.split('').reverse();
            var typer = setInterval(function() {
            if (!char.length) return clearInterval(typer)
            var next = char.pop()
            if(type == 'place'){
                el.placeholder += next
            } else {
                el.innerHTML += next
            }
            }, 30);
        },

        alertasUsuario(type){
            switch(type){
                case 1:
                    alert('Ola, Bem vindo ao sistema de criptografia indico que primeiro tente ligar sistema no botao power')
                    break
                case 2:
                    alert('Os botoes estão desabilitados, tente ligar o sistema pressionando o botão power')
                    break
            }

        }
    }
}

const computador = compEncode()

computador.iniciar()

