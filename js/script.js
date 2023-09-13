document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.c-item');
    const sections = document.querySelectorAll('section');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            items.forEach(i => i.classList.remove('is-active'));
            item.classList.add('is-active');

            sections.forEach(section => section.classList.add('hide-section'));

            const targetSectionId = item.getAttribute('data-target-section');
            if (targetSectionId) {
                const targetSection = document.getElementById(targetSectionId);
                if (targetSection) {
                    targetSection.classList.remove('hide-section');
                }
            }
        });
    });
});
