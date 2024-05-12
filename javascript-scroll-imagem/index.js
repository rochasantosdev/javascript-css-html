const imagem = document.querySelector('.imagem')

document.addEventListener('DOMContentLoaded', function() {
    const imagem = document.querySelector('.imagem');

    window.addEventListener('scroll', function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollPosition > 50) { 
            imagem.classList.add('imagemNova');
            imagem.classList.remove('imagem');
        } 
    });
});













/* ADICIONANDO E REMOVENDO A CLASSE




const imagem = document.querySelector('.imagem')

document.addEventListener('DOMContentLoaded', function() {
    const imagem = document.querySelector('.imagem');

    window.addEventListener('scroll', function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollPosition > 100) { 
            imagem.classList.add('imagemNova');
            imagem.classList.remove('imagem');
        } else {
            imagem.classList.add('imagem');
            imagem.classList.remove('imagemNova');
        }
    });
});

*/




