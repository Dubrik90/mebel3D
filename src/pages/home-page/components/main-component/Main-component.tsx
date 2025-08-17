import Button from "../../../../Compoments/button/Button.tsx";
import s from './main-component.module.scss';
import {AndroidIcon} from "../../../../assets/icons/Android-icon.tsx";
import {IosIcon} from "../../../../assets/icons/Ios-icon.tsx";
import {WindowsIcon} from "../../../../assets/icons/Windows-icon.tsx";
import {LogoIcon} from "../../../../assets/icons/Logo-icon.tsx";
import {ArrowRight} from "../../../../assets/icons/Arrow-right.tsx";
import {motion} from "framer-motion";
import {useState} from "react";
import Img1 from '../../../../assets/image/main-image2.png'
import Img2 from '../../../../assets/image/Macbook.png'
import {Modal} from "../../../../Compoments/modal/Modal.tsx";
import {handleScroll} from '../../../../utils/utils.ts'

const platforms = [
    {Icon: AndroidIcon, name: 'Android'},
    {Icon: IosIcon, name: 'iOS'},
    {Icon: WindowsIcon, name: 'Windows'},
    {Icon: IosIcon, name: 'Mac'},
];

export const MainComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalDescription, setModalDescription] = useState("");

    const handleOpen = (description: string) => {
        setModalDescription(description);
        setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);

    const titleVariant = {
        hidden: {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.6, // Добавляем небольшую задержку для каждого элемента
                duration: 0.5,  // Длительность анимации
            }
        }
    }

    const ingVariant = {
        hidden: {x: 100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.7, // Добавляем небольшую задержку для каждого элемента
                duration: 0.5,  // Длительность анимации
            }
        }
    }

    // Анимация для каждого элемента
    const itemVariants = {
        hidden: {y: 100, opacity: 0}, // Элементы изначально скрыты и за экраном
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.7 + (i * 0.1), // Добавляем небольшую задержку для каждого элемента
                duration: 0.5,  // Длительность анимации
            }
        })
    };

    return (
        <section className={s.main}>
            <div className={'container'}>
                <div>
                    <div className={s.content}>
                        <div className={s.column}>
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={titleVariant}
                                className={s.title}
                            >
                                Привлекайте больше клиентов
                                с помощью <span>Мебель 3D</span>
                            </motion.h1>
                            <div className={s.btnBlock}>
                                <Button variant={'primary'}
                                        onClick={() => handleOpen("Мы свяжемся с вами в ближайщее время")}>
                                    Свяжитесь с нами
                                </Button>

                                <Button variant={'outlined'}
                                        onClick={() => (1)}
                                >
                                    <a href="https://demo.mebel3d.by/">Демо-версия</a>
                                </Button>
                            </div>
                            <div className={s.platforms}>
                                {platforms.map((platform, index) => (
                                    <motion.div
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={itemVariants}
                                        className={s.platform} key={index}>
                                        <platform.Icon/>
                                        <p>{platform.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={ingVariant}
                            className={s.imgBlock}>
                            <div>
                                <img
                                    className={s.img} src={Img2} alt="laptop"/>
                            </div>
                            <div className={s.block2}>
                                <img
                                    className={s.img2} src={Img1} alt="laptop"/>
                            </div>

                        </motion.div>
                        {/*<motion.div*/}
                        {/*    initial="hidden"*/}
                        {/*    animate="visible"*/}
                        {/*    variants={ingVariant}*/}
                        {/*    className={s.imgBlock}>*/}

                        {/*    */}
                        {/*    <img*/}

                        {/*        className={s.img2} src={Img1} alt="laptop"/>*/}
                        {/*</motion.div>*/}

                    </div>
                </div>
                <p className={s.usage}>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll('#video');
                        }}
                        className={s.usage}
                        href=""> Посмотри, как использовать <LogoIcon className={'mail-logo'}/>
                        <ArrowRight/>
                    </a>
                </p>
            </div>
            {/* Используем модальное окно */}
            <Modal
                title="Заполните данные"
                description={modalDescription}
                //  description="Мы свяжемся с вами в ближайщее время"
                open={isOpen}
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
        </section>
    );
};
