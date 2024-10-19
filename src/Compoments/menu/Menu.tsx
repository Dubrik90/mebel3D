import s from './menu.module.scss'

const menuLinks = [
    {id: '#about', name: 'О программе'},
    {id: '#advantages', name: 'Преимущества'},
    {id: '#video', name: 'Видео-обзор'},
    {id: '#admin', name: 'Админ-панель'},
    {id: '#contacts', name: 'Контакты'},
]

export const Menu = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {
                    menuLinks.map(link => (
                        <li
                            key={link.id}
                            className={s.link}>
                            <a href={link.id}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

