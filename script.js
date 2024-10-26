    var num = document.querySelector("input.cnum")
    var lis = document.querySelector("select.sel")
    var res = document.querySelector("div.res")
    var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

    function add(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} foi adicionado`
        lis.appendChild(item)
        res.innerHTML = ""
    }
    else{
        alert("Valor invalido ou ja se encontra na lista!")
    }   
    num.value = ""
    num.focus()
}

    function F(){
        if(valores.length == 0){
            alert("Selecione um valor!")
            return
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior){
                    maior = valores[pos]
                }
                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            media = soma / tot
            res.innerHTML = ""
            res.innerHTML += `<p>A o todo temos ${tot} criados</p>`
            res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
            res.innerHTML += `<p>A média dos valores é ${media}</p>`
        }
        
    }