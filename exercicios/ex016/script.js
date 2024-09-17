function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')
    
    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert('ERRO')
    } else {
        res.innerHTML = 'Contando: <brl>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando passo: 1')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}