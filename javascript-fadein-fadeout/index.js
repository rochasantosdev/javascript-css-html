const minhaDivHidden = document.querySelector(".hidden");
const minhaNovaDiv = document.querySelector(".show");
const minhaDivs = document.querySelectorAll(".minhaDiv");
const minhaDivNova = document.querySelector(".minhaDivNova");




window.addEventListener('scroll', function() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 100) { 
        minhaDivHidden.classList.remove('hidden');
        minhaDivHidden.classList.add('show');
        minhaDivs.forEach(div => {
            div.classList.remove('minhaDiv');
            div.classList.add('minhaDivNova');
        });
    } /*else {
        minhaDivHidden.classList.remove('show');
        minhaDivHidden.classList.add('hidden');
        minhaDivs.forEach(div => {
            div.classList.remove('minhaDivNova');
            div.classList.add('minhaDiv');
        });
    }*/
});






