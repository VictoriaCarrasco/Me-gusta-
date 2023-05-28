function aumentarLikes(){
    let likes = document.querySelector ("#aumentarNumero");
    let likeTexto = likes.innerText;
    let likeNum = Number(likeTexto);
    likeNum += 1;
    likes.innerText = likeNum;
}