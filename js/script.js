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

    // 3. Модальное окно
    const modal = document.getElementById('requestModal');
    const form = document.getElementById('requestForm');

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
            window.closeModal(); // Закрываем окно после отправки
        });
    }

    // 5. АНИМАЦИЯ НАВИГАЦИИ (ПОДЧЕРКИВАНИЕ)
    const nav = document.getElementById('nav-list');
    const indicator = document.querySelector('.nav-indicator');
    const links = document.querySelectorAll('.nav-link');

    if (nav && indicator && links.length > 0) {
        // Функция передвижения линии
        function moveLine(el) {
            indicator.style.width = el.offsetWidth + 'px';
            indicator.style.transform = `translateX(${el.offsetLeft}px)`;
        }

        // Наведение мыши
        links.forEach(link => {
            link.addEventListener('mouseenter', (e) => moveLine(e.target));
        });

        // Уход мыши (возврат к активному)
        nav.addEventListener('mouseleave', () => {
            const active = document.querySelector('.nav-link.active');
            active ? moveLine(active) : indicator.style.width = '0';
        });

        // Подсветка текущей страницы при загрузке
        const current = location.pathname.split('/').pop() || 'index.html';
        links.forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
                setTimeout(() => moveLine(link), 100); // Ставим линию
            }
        });
    }

});