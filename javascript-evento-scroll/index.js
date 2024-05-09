window.onscroll = function() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 500) {
        document.querySelector(".hidden").classList.add("show");
    }
};






























/* const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element)) */