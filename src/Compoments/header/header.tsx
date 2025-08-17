import s from './header.module.scss'
import {LogoIcon} from "../../assets/icons/Logo-icon.tsx";
import {Menu} from "../menu/Menu.tsx";
import {clsx} from "clsx";

import {useState} from "react";
import Button from "../button/Button.tsx";
import {ExitIcon} from "../../assets/icons/exit-icon.tsx";
import {motion} from "framer-motion";
import {Modal} from "../modal/Modal.tsx";

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    };
    const handleClose = () => setIsModalOpen(false);
    const variant = {
        hidden: {y: -100, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3, // Добавляем небольшую задержку для элемента
                duration: 0.5,  // Длительность анимации
            }
        }
    }

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={variant}
            className={s.header}>
            <div className={clsx('container', s.content)}>
                <div className={s.logoBlock}>
                    <a
                        className={clsx(isOpenMenu && s.menuOpen, s.logo)} href="#">
                        <LogoIcon/>
                    </a>
                </div>

                <Menu
                    setIsOpenMenu={setIsOpenMenu}
                    setIsModalOpen={setIsModalOpen}
                    isOpenMenu={isOpenMenu}/>
                <div className={s.btnBlock}>
                    <Button
                       // onClick={handleOpen}
                        variant={'outlined'} fullWidth={true}>
                        <a href="https://demo.mebel3d.by/">Демо-версия</a>
                    </Button>
                    <a href="https://admin.mebel3d.by/" target="_blank">
                        <Button variant={'secondary'}>
                            <ExitIcon/>
                            Вход
                        </Button>
                    </a>

                </div>
                <button
                    onClick={() => {
                        setIsOpenMenu(!isOpenMenu)
                    }}
                    className={clsx(isOpenMenu && s.menuOpen, s.burger)}><span></span>
                </button>
            </div>
            <Modal
                title="Заполните данные"

                description="Мы свяжемся с вами для подключения демо-версии"
                open={isModalOpen}
                onClose={handleClose}
            >
                <div className={'group'}>
                    <input type="text" required placeholder=" "/>
                    <span className="highlight"></span>
                    <span className={'bar'}></span>
                    <label>Имя</label>
                </div>

                <div className={'group'}>
                    <input type="email" required placeholder=" "/>
                    <span className="highlight"></span>
                    <span className={'bar'}></span>
                    <label>Email</label>
                </div>

                <div className={'group'}>
                    <input type="number" required placeholder=" "/>
                    <span className="highlight"></span>
                    <span className={'bar'}></span>
                    <label>Телефон</label>
                </div>
            </Modal>
        </motion.header>
    );
};

