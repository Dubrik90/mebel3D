import s from './menu.module.scss';
import { clsx } from "clsx";
import Button from "../button/Button.tsx";
import { ExitIcon } from "../../assets/icons/exit-icon.tsx";
import { motion } from "framer-motion";
import {useWindowSize} from "../../hooks/useWindowSize.ts";
import {handleScroll} from "../../utils/utils.ts";


const menuLinks = [
    { id: '#about', name: 'О программе' },
    { id: '#advantages', name: 'Преимущества' },
    { id: '#video', name: 'Видео-обзор' },
    { id: '#admin', name: 'Админ-панель' },
    { id: '#contacts', name: 'Контакты' },
];

type Props = {
    isOpenMenu: boolean;
    setIsOpenMenu: (show: boolean) => void
    setIsModalOpen: (isOpen: boolean) => void
}

export const Menu = ({ isOpenMenu, setIsOpenMenu }: Props) => {
    const { width } = useWindowSize();  // Получаем ширину экрана


    // Анимация для каждого элемента
    const itemVariants = {
        hidden: { x: -100, opacity: 0 }, // Элементы изначально скрыты и за экраном
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1, // Добавляем небольшую задержку для каждого элемента
                duration: 0.5,  // Длительность анимации
            }
        })
    };

    const linksVariant = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5, // Добавляем небольшую задержку для каждого элемента
                duration: 0.5,  // Длительность анимации
            }
        }
    }

    // Анимация будет работать только на мобильных устройствах (ширина менее 768px)
    const shouldAnimate = width > 1230;

    return (
        <nav className={s.nav}>
            <ul className={clsx(isOpenMenu && s.active, s.menu)}>
                {
                    menuLinks.map((link, index) => (
                        <motion.li
                            key={link.id}
                            className={s.link}
                            custom={index}           // Передаем индекс для управления задержкой
                            initial="hidden"         // Изначальное состояние
                            animate={shouldAnimate || isOpenMenu ? "visible" : "hidden"}  // Проверка на размер экрана и состояние меню
                            variants={itemVariants}  // Указываем анимацию
                        >
                            <a href={link.id} onClick={(e) => {
                                e.preventDefault();  // Предотвращаем стандартное поведение
                                handleScroll(link.id);
                                setIsOpenMenu(false)
                            }}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))
                }
                <motion.div className={clsx(isOpenMenu && s.menuOpen ,s.btnBlock)}
                            initial="hidden"
                            animate={(isOpenMenu) ? "visible" : "hidden"}
                            variants={linksVariant}
                >
                    <Button variant={'outlined'} fullWidth={true}
                            // onClick={() => {
                            //     setIsOpenMenu(false);
                            //     setIsModalOpen(true);
                            // }}
                    >
                        <a href="https://demo.mebel3d.by/">Демо-версия</a>
                    </Button>
                    <Button variant={'secondary'}>
                    <ExitIcon />
                        Вход
                    </Button>
                </motion.div>
            </ul>
        </nav>
    );
};
