function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#E4D9C6'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#C27F4E'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#011B36'
    }
}
