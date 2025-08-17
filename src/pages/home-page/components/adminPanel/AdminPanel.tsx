import s from './adminPanel.module.scss'

export const AdminPanel = () => {
    return (
        <section id={'admin'} className={s.adminPanel}>
            <div className={'container'}>
                <div className={s.content}>
                    <div className={s.textBlock}>
                        <h3 className={s.title}>Админ панель</h3>
                        <p className={s.subtitle}>
                            С помощью административной панели вы сможете: <br/>
                            - отслеживать активность ваших пользователей в режиме реального времени;<br/>
                            - получать полное представление о пользовании программой вашими дилерами;<br/>
                            - сравнивать данные активности пользователей за разные периоды;<br/>
                            - поддерживать связь с вашими пользователями, информируя их о новостях и акциях с помощью автоматической новостной рассылки
                        </p>
                    </div>
                    <div className={s.imageBg}></div>
                </div>
            </div>

        </section>
    );
};

