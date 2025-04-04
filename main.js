//getElementById: mesma função do queselect
let botao = document.getElementById("button")
let tarefa = document.getElementById("input-tarefa")
let lista = document.getElementById("lista")

//ESSA FUNÇÃO FICA SEMPRE ATIVA

botao.addEventListener("click", function(){
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = tarefa.value
    //classList: chamar classe
    paragrafo.classList.add("estilo-paragrafo")
    lista.appendChild(paragrafo)

    paragrafo.addEventListener("click", function(){
        paragrafo.style.textDecoration = "line-through"
    })

    paragrafo.addEventListener("dblclick", function(){
        lista.removeChild(paragrafo)
    })
})