const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

modalIcon.addEventListener('click', function () {
    // Проверяем, активно ли меню сейчас
    const isActive = this.classList.contains('modal-icon--active');

    if (!isActive) {
        // Открываем
        this.classList.add('modal-icon--active');
        modal.classList.add('modal--active');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        // Закрываем (при повторном клике по иконке)
        this.classList.remove('modal-icon--active');
        modal.classList.remove('modal--active');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Закрытие при клике на ссылки
const modalLinks = document.querySelectorAll('.modal a'); // Добавил 'a', чтобы выбрать именно ссылки внутри

modalLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        modalIcon.classList.remove('modal-icon--active');
        modal.classList.remove('modal--active');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
});
