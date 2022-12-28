const compEncode = () => {
    return{
        texto : document.querySelector('.textoCode'),
        displayResul : document.querySelector('.resultado'),
        buttonCript : document.querySelector('.cript'),
        buttonDescript : document.querySelector('.descript'),
        buttonCopiar : document.querySelector('.copiar'),
        buttonPower : document.querySelector('.buttonPower'),
        estado: 'Desligado',
        erro: false,
    
        iniciar(){
            this.controleGeral()
            this.controleButtons()
        },

        controleButtons(){
            const hasUpper = (str) => /[A-Z]/.test(str);
            this.buttonCript.addEventListener('click', e =>{
                    if(this.estado == 'Ligado'){
                        if(!this.texto.value){
                            this.erro = true
                            this.alertasUsuario('ErroNulo')
                        } else {
                            if(hasUpper(this.texto.value)){
                                this.erro = true
                                this.alertasUsuario('ErroLetraM')
                            } else {
                                if(this.erro){
                                    this.erro = false
                                    this.displayResul.className = "resultado telaLigando"
                                }
                                this.criptografar()
                            }
                        }
                    } else {
                        this.alertasUsuario(2)
                    }
                }
            )


            this.buttonDescript.addEventListener('click', e =>{
                    if(this.estado == 'Ligado'){
                        if(!this.texto.value){
                            this.erro = true
                            this.alertasUsuario('ErroNuloDesc')
                        } else if(hasUpper(this.texto.value)){
                            this.erro = true
                            this.alertasUsuario('ErroLetraM')
                        } else if(this.erro){
                                this.erro = false
                                this.displayResul.className = "resultado telaLigando"
                            }
                        this.descriptografar()
                    } else {
                        this.alertasUsuario(2)
                    }
            })
            this.buttonCopiar.addEventListener('click', e=>{
                if(!this.displayResul.innerHTML == ''){
                    this.copiarTexto()
                } else {
                    this.alertasUsuario(3)
                }
            })
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
                    this.texto.value = ''
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
            this.slowText(textoCrypt, this.displayResul)
            console.log(textoCrypt)
        },
    
        descriptografar(){
            let textoCrypt = this.texto.value
            textoCrypt = textoCrypt.replaceAll('enter', 'e')
            textoCrypt = textoCrypt.replaceAll('imes', 'i')
            textoCrypt = textoCrypt.replaceAll('ai', 'a')
            textoCrypt = textoCrypt.replaceAll('ober', 'o')
            textoCrypt = textoCrypt.replaceAll('ufat', 'u')
            this.slowText(textoCrypt, this.displayResul)
        },

        //Funcionalidades
        copiarTexto(){
            navigator.clipboard.writeText(this.displayResul.innerHTML)
        },

        slowText(str, el, type){
            el.innerHTML = ''
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

        //Controle de erros
        alertasUsuario(type){
            switch(type){
                case 1:
                    alert('Ola, Bem vindo ao sistema de criptografia indico que primeiro tente ligar sistema no botao power')
                    break
                case 2:
                    alert('Os botoes estão desabilitados, tente ligar o sistema pressionando o botão power')
                    break
                case 3:
                    alert('Primeiro cryptografe uma mensagem para copiala')
                    break
                case 'ErroLetraM':
                    const mensagem = 'Letra MAIUSCULA DETECTADA !!! coloque apenas letras minusculas'
                    this.displayResul.className = "resultado telaErro"
                    this.slowText(mensagem, this.displayResul)
                    break
                case 'ErroNulo':
                    const mensagem01 = 'Escreva Alguma mensagem para Cryptografar'
                    this.displayResul.className = "resultado telaErro"
                    this.slowText(mensagem01, this.displayResul)
                    break
                case 'ErroNuloDesc':
                    const mensagem02 = 'Escreva Alguma mensagem para Descriptografar'
                    this.displayResul.className = "resultado telaErro"
                    this.slowText(mensagem02, this.displayResul)
                    break

            }
        }
    }
}

const computador = compEncode()

computador.iniciar()

