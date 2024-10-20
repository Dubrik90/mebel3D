import s from './header.module.scss'
import {LogoIcon} from "../../assets/icons/Logo-icon.tsx";
import {Menu} from "../menu/Menu.tsx";
import {clsx} from "clsx";
import Button from "../button/Button.tsx";
import {ExitIcon} from "../../assets/icons/exit-icon.tsx";
import {useState} from "react";

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <header className={s.header}>
            <div className={clsx('container', s.content)}>
                <a
                    className={s.logo} href="#">
                    <LogoIcon/>
                </a>
                <Menu isOpenMenu={isOpenMenu}/>
                <div className={s.btnBlock}>
                    <Button variant={'outlined'} fullWidth={true}>
                        Демо-версия
                    </Button>
                    <Button variant={'secondary'}>
                        <ExitIcon/>
                        Вход
                    </Button>
                </div>
                <button
                    onClick={() => {
                        setIsOpenMenu(!isOpenMenu)
                    }}
                    className={clsx(isOpenMenu && s.menuOpen, s.burger) }><span></span></button>
            </div>


        </header>
    );
};

