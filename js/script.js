document.addEventListener('DOMContentLoaded', () => {
    // 1. СМЕНА ФОНОВ
    const slides = document.querySelectorAll('.hero-bg');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 секунд

    if (slides.length > 1) {
        setInterval(() => {
            // Убираем активный класс у текущего
            slides[currentSlide].classList.remove('active');
            // Вычисляем следующий
            currentSlide = (currentSlide + 1) % slides.length;
            // Добавляем класс следующему
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // 2. ПЛАВНОЕ ПОЯВЛЕНИЕ ТЕКСТА
    const heroContent = document.querySelector('.hero-content');
    
    // Небольшая задержка (300мс), чтобы браузер успел отрисовать страницу
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('show');
        }, 600);
    }
});