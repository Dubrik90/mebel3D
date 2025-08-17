export const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    const header = document.querySelector('header'); // Находим элемент хедера
    const headerHeight = header ? header.offsetHeight : 0; // Получаем высоту хедера или 0, если хедер не найден

    if (element) {
        // Получаем координаты элемента и вычитаем высоту хедера для корректного скролла
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth', // Плавный скролл
        });

    }
};
