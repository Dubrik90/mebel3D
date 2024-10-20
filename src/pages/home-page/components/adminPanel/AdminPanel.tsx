import s from './adminPanel.module.scss'

export const AdminPanel = () => {
    return (
        <section className={s.adminPanel}>
            <div className={'container'}>
                <div className={s.content}>
                    <div className={s.textBlock}>
                        <h3 className={s.title}>Админ панель</h3>
                        <p className={s.subtitle}>С помощью админ.панели вы можете контролировать активность ваших
                            пользователей, что увеличит продажи, а также контроль над вашими дилерами</p>
                    </div>
                    <div className={s.imageBg}></div>
                </div>
            </div>

        </section>
    );
};

