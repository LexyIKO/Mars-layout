function setImagesHeight() {
    const images = document.querySelectorAll('.contet__box__main__images img');
    const logo = document.querySelector('.logo__block'); // Используем querySelector для выбора элемента по классу

// Получаем текущую ширину элемента logo в пикселях
    const currentWidth = logo.offsetWidth;

// Устанавливаем высоту элемента равной его текущей ширине
    logo.style.height = `${currentWidth}px`;

    images.forEach(img => {
        img.style.height = `${img.offsetWidth * (9 / 16)}px`;
    });
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', () => {
    setImagesHeight()
});

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', ()=>{
    setImagesHeight()
});