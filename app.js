let carroAtual = document.getElementById("primeiro-carro")
console.log(carroAtual.style.color)

function trocaPrimeiroCarro(){
    let primeiroCarro = document.getElementById("primeiro-carro")
    let segundoCarro = document.getElementById("segundo-carro")

    if(primeiroCarro.style.color == "white"){
        primeiroCarro.style.color = "#ffb900"
        segundoCarro.style.color = "white"

        let nomeCarro = document.getElementById("nome-carro")
        nomeCarro.innerHTML = "POLO<br>1.0 MPI"
        
        let informaçoes_custo = document.getElementById("informaçoes-custo")
        informaçoes_custo.innerHTML = "A PARTIR DE <b>R$ 49.990,00</b><br> + TAXA <b>0%</b>"
        
        let imagemFundo = document.getElementById("imagem-fundo")
        imagemFundo.src = "bg_novo_polo.png"

        let imagemCarro = document.getElementById("imagem-carro")
        imagemCarro.src = "novo_polo.png"
    }
}

function trocaSegundoCarro(){
    let primeiroCarro = document.getElementById("primeiro-carro")
    let segundoCarro = document.getElementById("segundo-carro")

    if(segundoCarro.style.color == "white"){
        segundoCarro.style.color = "#ffb900"
        primeiroCarro.style.color = "white"

        let nomeCarro = document.getElementById("nome-carro")
        nomeCarro.innerHTML = "UP! MOVE"

        let informaçoes_custo = document.getElementById("informaçoes-custo")
        informaçoes_custo.innerHTML = "BÔNUS DE <b>R$ 3.000,00</b><br>+ TAXA <b>0%</b>"
        
        let imagemFundo = document.getElementById("imagem-fundo")
        imagemFundo.src = "bg_up.png"

        let imagemCarro = document.getElementById("imagem-carro")
        imagemCarro.src = "up.png"
    }
}