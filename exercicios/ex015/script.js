function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digite um ano válido')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-homem.jpg');
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-homem.jpg');
            } else {
                img.setAttribute('src', 'imagens/velho-homem.jpg');
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-mulher.jpg');
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-mulher.jpg');
            } else {
                img.setAttribute('src', 'imagens/velho-mulher.jpg');
            }
        } 
        res.style.textAlign = 'center';
        res.innerHTML = `Detectado pessoa do genero ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}