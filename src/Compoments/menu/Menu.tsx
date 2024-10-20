import s from './menu.module.scss'
import {clsx} from "clsx";
import Button from "../button/Button.tsx";
import {ExitIcon} from "../../assets/icons/exit-icon.tsx";

const menuLinks = [
    {id: '#about', name: 'О программе'},
    {id: '#advantages', name: 'Преимущества'},
    {id: '#video', name: 'Видео-обзор'},
    {id: '#admin', name: 'Админ-панель'},
    {id: '#contacts', name: 'Контакты'},
]

type Props = {
    isOpenMenu: boolean
}

export const Menu = ({isOpenMenu}: Props) => {
    return (
        <nav className={s.nav}>
            <ul
                className={
                    clsx(isOpenMenu && s.active, s.menu)}
            >
                {
                    menuLinks.map(link => (
                        <li
                            key={link.id}
                            className={s.link}>
                            <a href={link.id}>{link.name}</a>
                        </li>
                    ))
                }
                <div className={s.btnBlock}>
                    <Button variant={'outlined'} fullWidth={true}>
                        Демо-версия
                    </Button>
                    <Button variant={'secondary'}>
                        <ExitIcon/>
                        Вход
                    </Button>
                </div>
            </ul>
        </nav>
    );
};

