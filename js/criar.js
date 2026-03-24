document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const imagemInput = document.getElementById('imagem');

    const file = imagemInput.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(event){
            salvarPost(titulo, descricao, event.target.result);
        }

        reader.readAsDataURL(file);
    } else {
        salvarPost(titulo, descricao, null);
    }
});

function salvarPost(titulo, descricao, imagem){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.push({
        titulo: titulo,
        descricao: descricao,
        imagem: imagem
    });

    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post criado com sucesso!');

    // limpa formulário
    document.getElementById('post-form').reset();
}