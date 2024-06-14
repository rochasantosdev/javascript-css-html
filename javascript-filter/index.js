function filterItems(category) {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        if (category === 'todos') {
            item.classList.remove('hidden', 'fade-out');
            item.classList.add('visible');
        } else {
            if (item.getAttribute('data-category') === category) {
                item.classList.remove('hidden', 'fade-out');
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
                item.classList.add('fade-out');
                setTimeout(() => item.classList.add('hidden'), 300);
            }
        }
    });
}

// Oculta todos os itens inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.add('hidden'));
});
