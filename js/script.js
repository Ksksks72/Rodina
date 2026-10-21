document.addEventListener('DOMContentLoaded', () => {
    // 1. Смена фоновых изображений
    const slides = document.querySelectorAll('.hero-bg');
    let currentSlide = 0;
    const slideInterval = 5000;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // 2. Плавное появление текста
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('show');
        }, 600);
    }

    
const modal = document.getElementById('requestModal');
    const form = document.getElementById('requestForm');

    // Делаем функции доступными для onclick в HTML
    window.openModal = function(type, item = '') {
        if (!modal) return;

        const isOrder = type === 'order';

        document.getElementById('modalTitle').textContent =
            isOrder ? 'Оформить заказ' : 'Отклик на вакансию';

        document.getElementById('modalDescription').textContent =
            isOrder
                ? 'Оставьте заявку на нашу продукцию.'
                : 'Оставьте контакты, и мы рассмотрим вашу кандидатуру.';

        document.getElementById('productField').hidden = !isOrder;
        document.getElementById('vacancyField').hidden = isOrder;

        document.getElementById('product').required = isOrder;
        document.getElementById('vacancy').required = !isOrder;

        document.getElementById('vacancy').value = item;

        document.getElementById('detailsLabel').textContent =
            isOrder
                ? 'Количество и комментарий'
                : 'Опыт работы и сообщение';

        document.getElementById('submitButton').textContent =
            isOrder ? 'Оформить заказ' : 'Отправить отклик';

        modal.classList.add('active');
    };

    window.closeModal = function() {
        if (modal) {
            modal.classList.remove('active');
        }
    };

    // Закрытие при клике на затемнённый фон
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                window.closeModal();
            }
        });
    }

    // Закрытие по Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            window.closeModal();
        }
    });

    // 4. Демонстрационная отправка формы
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Форма заполнена!');
        });
    }

}); 