function ColetarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
}

// https://viacep.com.br/ws/49108-183/json/
// toda vez que misturar código com texto em JAVA: (``)
// fetch: é uma função específica para acessar url de qualquer lugar.

async function Dados(cep) {
    let dados =  await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    console.log(dados)
    telaDados(dados)
}

function telaDados(dados) {
    document.querySelector("#endereco").innerHTML = "° Endereço: " + dados.logradouro
    document.querySelector("#bairro").innerHTML = " ° Bairro: " + dados.bairro
    document.querySelector("#cidade").innerHTML = "° Cidade: " + dados.localidade
    document.querySelector("#estado").innerHTML = "° Estado: " + dados.estado
    document.querySelector("#regiao").innerHTML = "° Região: " + dados.regiao
}

