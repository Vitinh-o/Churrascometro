var inputHomem = 0
var inputMulher = 0
var inputCriancas = 0
var inputBebida = 0
var inputDuracao = 0

function construtor(){
    
        inputHomem = document.getElementById("qtdHomens").value
            
        inputMulher = document.getElementById("qtdMulheres").value

        inputCriancas = document.getElementById("qtdCriancas").value
        
        inputBebida = document.getElementById("qtdBebida").value
            
        inputDuracao = document.getElementById("duracaoTotal").value    

}

function calculo(){

        let mediaCarne = ( (400 * inputHomem)  + (400 * inputMulher) + (200 * inputCriancas) ) * inputDuracao  

        let mediaBebida = (500 * inputBebida) * inputDuracao


        if((inputHomem != 0  || inputMulher != 0 || inputCriancas != 0 || inputDuracao != 0) && (inputDuracao != 0 )){
            colocarNoHtml(mediaCarne, mediaBebida)
        }
        else{

            let  resultados = document.getElementById("resultado")
            resultados.style.display = "none"
            
        }


    }


function colocarNoHtml(mediaCarne, mediaBebida){

    let resultados = document.getElementById("resultado")
    let  duracao = document.getElementById("duracao")
    let numero = document.getElementsByClassName("alteraCor3")[0]

    // console.log(resultados);

    resultados.innerHTML = "<h4 id='teste'> A quantidade necessária de carne será: " + mediaCarne + " gramas </h4>" 
    
    resultados.innerHTML += "<h4> A quantidade necessária de bebida será: " + mediaBebida + " mls </h4>" 

    numero.style.backgroundColor = "white"
    numero.style.color = "black"

    numero = document.getElementsByClassName("alteraCor4")[0]

    numero.style.backgroundColor = "green"
    numero.style.color = "white"

    resultados.style.display = "block"
    
    duracao.style.display = "none"

}

function alterarItem(numero){

    let numeroPego = numero.id
    let alterarEstiloElementos = document.getElementsByClassName("numeros")
    let bebem = document.getElementById("bebem")
    let duracao = document.getElementById("duracao") 
    let media = document.getElementById("resultado")
    let qtdPessoas = document.getElementById("qtdPessoas")


    switch(numeroPego){

        case "1":

            for (var i = 0; i < alterarEstiloElementos.length; i++){
                
                alterarEstiloElementos[i].style.backgroundColor = "white"
                alterarEstiloElementos[i].style.color = "black"

            }

            numero = document.getElementsByClassName("alteraCor1")[0]

            numero.style.backgroundColor = "green"
            numero.style.color = "white"

            bebem = document.getElementById("bebem")
            duracao = document.getElementById("duracao") 
            media = document.getElementById("resultado")
            qtdPessoas = document.getElementById("qtdPessoas")

            bebem.style.display = "none"
            duracao.style.display = "none"
            media.style.display = "none"
            qtdPessoas.style.display = "block"

        break


        case "2":

            if(inputHomem != 0 || inputMulher != 0 || inputCriancas != 0){

                    for (var i = 0; i < alterarEstiloElementos.length; i++){
                        
                        alterarEstiloElementos[i].style.backgroundColor = "white"
                        alterarEstiloElementos[i].style.color = "black"

                    }

                    numero = document.getElementsByClassName("alteraCor2")[0]

                    numero.style.backgroundColor = "green"
                    numero.style.color = "white"

                    bebem.style.display = "block"
                    duracao.style.display = "none"
                    media.style.display = "none"
                    qtdPessoas.style.display = "none"

                    }

            else{alert("Insira ao menos uma pessoa")}


        break

        case "3":

            if( inputHomem != 0 || inputMulher != 0 || inputCriancas != 0 ){

                for (var i = 0; i < alterarEstiloElementos.length; i++){
                    
                    alterarEstiloElementos[i].style.backgroundColor = "white"
                    alterarEstiloElementos[i].style.color = "black"

                }

                numero = document.getElementsByClassName("alteraCor3")[0]

                numero.style.backgroundColor = "green"
                numero.style.color = "white"

                bebem.style.display = "none"
                duracao.style.display = "block"
                media.style.display = "none"
                qtdPessoas.style.display = "none"

            }
            else{alert("Insira ao menos uma pessoa")}

        break

        case "4":

            if( (inputHomem != 0  || inputMulher != 0 || inputCriancas != 0) && (inputDuracao != 0) ){


                for (var i = 0; i < alterarEstiloElementos.length; i++){
                    
                    alterarEstiloElementos[i].style.backgroundColor = "white"
                    alterarEstiloElementos[i].style.color = "black"

                }

                numero = document.getElementsByClassName("alteraCor4")[0]

                numero.style.backgroundColor = "green"
                numero.style.color = "white"

                bebem.style.display = "none"
                duracao.style.display = "none"
                media.style.display = "block"
                qtdPessoas.style.display = "none"
            }
            else{

                alert("Insira ao menos uma pessoas ou insera a quantidade de horas para o churrasco")

            }


        break

        case "5":


            if(inputHomem != 0 || inputMulher != 0 || inputCriancas != 0){

                alterarEstiloElementos[0].style.backgroundColor = "white"
                alterarEstiloElementos[0].style.color = "black"

                numero = document.getElementsByClassName("alteraCor2")[0]

                numero.style.backgroundColor = "green"
                numero.style.color = "white"

                bebem.style.display = "block"
                qtdPessoas.style.display = "none"

            }
            else(alert("Por favor insira ao menos uma pessoa"))

        break

        case "6":    
                    
                alterarEstiloElementos[1].style.backgroundColor = "white"
                alterarEstiloElementos[1].style.color = "black"

                numero = document.getElementsByClassName("alteraCor3")[0]

                numero.style.backgroundColor = "green"
                numero.style.color = "white"

                bebem.style.display = "none"
                duracao.style.display = "block"

            
        break

        default:

            alert("Ocorreu um problema na hora de calcular os valores, por favor tente novamente mais tarde")    


    }


}
