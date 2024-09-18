function calcular(){
    var numeroTabuada = document.getElementById('txtnum')
    var tabuada = document.getElementById('selectTabuada')

    if(numeroTabuada.value.length == 0){
        window.alert('ERRO')
    } else {
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var num = Number(numeroTabuada.value)
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}