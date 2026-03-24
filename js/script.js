console.log("script carregou");
function criarCard(titulo, descricao, imagem) {
    const container = document.getElementById('card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    // IMAGEM com wrapper
    if(imagem){
        const wrapper = document.createElement('div');
        wrapper.classList.add('card-img-wrapper');

        const img = document.createElement('img');
        img.src = imagem;
        img.classList.add('card-img');

        wrapper.appendChild(img);
        card.appendChild(wrapper);
    }

    // 🔥 BODY (TEXTO SEPARADO)
    const body = document.createElement('div');
    body.classList.add('card-body');

    const tituloElemento = document.createElement('h2');
    tituloElemento.classList.add('card-title');
    tituloElemento.textContent = titulo;

    const descricaoElemento = document.createElement('p');
    descricaoElemento.classList.add('card-description');
    descricaoElemento.textContent = descricao;

    body.appendChild(tituloElemento);
    body.appendChild(descricaoElemento);

    card.appendChild(body);

    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        criarCard(post.titulo, post.descricao, post.imagem);
    });
});