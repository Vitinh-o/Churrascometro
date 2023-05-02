var inputHomem
            
var inputMulher

var inputCriancas

var inputBebida
    
var inputDuracao

function construtor(){
    
        inputHomem = document.getElementById("qtdHomens").value
            
        inputMulher = document.getElementById("qtdMulheres").value

        inputCriancas = document.getElementById("qtdCriancas").value
        
        inputBebida = document.getElementById("qtdBebida").value
            
        inputDuracao = document.getElementById("duracaoTotal").value    

        console.log(inputDuracao)
        console.log(inputBebida)
        console.log(inputCriancas)
        console.log(inputMulher)
        console.log(inputHomem)

}

function calculo(){

    let mediaCarne = ( (400 * inputHomem)  + (400 * inputMulher) + (200 * inputCriancas) ) * inputDuracao  

    let mediaBebida = (500 * inputBebida) * inputDuracao


    colocarNoHtml(mediaCarne, mediaBebida)
    // console.log(inputHomem)
    // console.log(inputDuracao)

}


function colocarNoHtml(mediaCarne, mediaBebida){

    let resultados = document.getElementById("resultado")
    let  duracao = document.getElementById("duracao")
    let numero = document.getElementById("alteraCor3")

    // console.log(resultados);

    resultados.innerHTML = "<h4 id='teste'> A quantidade necessária de carne será: " + mediaCarne + " gramas </h4>" 
    
    resultados.innerHTML += "<h4> A quantidade necessária de bebida será: " + mediaBebida + " mls </h4>" 

    numero.style.backgroundColor = "white"
    numero.style.color = "black"

    numero = document.getElementById("alteraCor4")

    numero.style.backgroundColor = "green"
    numero.style.color = "white"

    resultados.style.display = "block"
    
    duracao.style.display = "none"

}

function alterarElementosBebem(){

    let bebem = document.getElementById("bebem")
    let  pessoas = document.getElementById("qtdPessoas")
    let numero = document.getElementById("alteraCor1")

    numero.style.backgroundColor = "white"
    numero.style.color = "black"

    numero = document.getElementById("alteraCor2")

    numero.style.backgroundColor = "green"
    numero.style.color = "white"


    pessoas.style.display = "none"


    bebem.style.display = "block"
    

}



function alterarElementosDuracao(){

    let duracao = document.getElementById("duracao")
    let  bebem = document.getElementById("bebem")
    let numero = document.getElementById("alteraCor2")

    numero.style.backgroundColor = "white"
    numero.style.color = "black"

    numero = document.getElementById("alteraCor3")

    numero.style.backgroundColor = "green"
    numero.style.color = "white"

    duracao.style.display = "block"
    
    bebem.style.display = "none"

}

