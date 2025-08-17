import Button from "../../../../Compoments/button/Button.tsx";
import {Modal} from "../../../../Compoments/modal/Modal.tsx";
import {useState} from "react";
import s from './feedback.module.scss'
import {motion} from 'framer-motion';

export const Feedback = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const textAnimation = {
        hidden: {x: -100, opacity: 0},
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.5,
            }
        })
    }
    const btnAnimation = {
        hidden: {x: 100, opacity: 0},
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.5,
            }
        })
    }


    return (
        <motion.section
            id={'contacts'}
            initial='hidden'
            whileInView='visible'
            viewport={{
                amount: 0.2,
                // once: true
            }} className={s.feedback}>
            <div className={"container"}>
                <div className={s.content}>
                    <motion.p custom={1} variants={textAnimation} className={s.title}>Давайте поговорим о продукте
                    </motion.p>
                    <motion.div
                        custom={1}
                        variants={btnAnimation}
                    >
                        <Button variant={"primary"} onClick={handleOpen}>
                            Свяжитесь с нами
                        </Button>
                    </motion.div>

                </div>

                {/* Используем модальное окно */}
                <Modal
                    title="Заполните данные"
                    description="Мы свяжемся с вами в ближайщее время"
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
            </div>
        </motion.section>
    );
};
