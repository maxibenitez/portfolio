document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.c-item');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            items.forEach(i => i.classList.remove('is-active'));
            item.classList.add('is-active');
        });
    });
});
