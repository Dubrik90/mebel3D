import s from './advantages.module.scss'

export const Advantages = () => {
    return (
        <section className={s.advantages}>
            <div className={s.content}>
                <div className={s.advImage}>
                </div>
                <div className={s.contentBlock}>
                    <h2 className={s.title}>
                        Современный инструмент для продаж мебели
                    </h2>
                    <p className={s.subTitle}>
                        Упрощайте общение с клиентами и ускоряйте процесс продаж благодаря интуитивно понятной и легкой
                        в использовании программе.
                    </p>
                </div>
            </div>
        </section>
    );
};

