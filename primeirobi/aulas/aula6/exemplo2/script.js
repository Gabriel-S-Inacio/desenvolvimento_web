function adicionar(evento){
    evento.preventDefault()
    const produto = "Produto: " + evento.target[0].value;
    const quantidade = "Qtd: " + evento.target[1].value;

    if(evento.target[0].value  === "" ) {
            alert("Insira um produto")
            return
    }
    if(evento.target[1].value  === "" ) {
            alert("Insira a quantiade")
            return
    }
        

    // console.log(evento.target)
    // console.log(evento.target[0].value)
    // console.log(evento.target[1].value)

    const li = document.createElement("li");
    li.textContent = produto + " - " + quantidade

    li.addEventListener('click', () => remover (li))

    const ul = document.querySelector(".container");

    ul.appendChild(li);

    evento.target[0].value = "";
    evento.target[1].value = "";
}

function remover(elemento){
    elemento.remove()
}