// Отримуємо елементи кнопки та модального вікна
const modalOpenButton = document.querySelector('[data-modal-open]');
const modalBackdrop = document.querySelector('[data-modal]');
const modalCloseButton = document.querySelector('[data-modal-close]');

// Функція для відкриття модального вікна
const openModal = () => {
    modalBackdrop.classList.remove('modal-backdrop--hidden');
};

// Функція для закриття модального вікна
const closeModal = () => {
    modalBackdrop.classList.add('modal-backdrop--hidden');
};

// Додаємо слухачі подій для кнопки відкриття та закриття модального вікна
modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);

// Закриття модального вікна при натисканні на фонову область
modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});
