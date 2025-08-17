import s from './advantages.module.scss'
import {motion} from "framer-motion";

export const Advantages = () => {

    const textAnimation = {
        hidden: {x: '-100%', opacity: 0},
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.6,
            }
        })
    }
    const imageAnimation = {
        hidden: {scale: 0,},
        visible: (custom) => ({
            scale: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.6,

            }
        })
    }


    return (
        <motion.section
            id='about'
            initial='hidden'
            whileInView='visible'
            viewport={{
                amount: 0.4,
                // once: true
            }}
            className={s.advantages}
        >
            <div className={s.content}>
                <motion.div
                    custom={1} variants={textAnimation}
                    className={s.contentBlock}>
                    <h2  className={s.title}>
                        Современный инструмент для продаж мебели
                    </h2>
                    <p  className={s.subTitle}>
                        Упрощайте общение с клиентами и ускоряйте процесс продаж благодаря интуитивно понятной и легкой
                        в использовании программе.
                    </p>
                </motion.div>
                <motion.div
                    custom={2}
                    variants={imageAnimation}
                    className={s.advImage}>

                </motion.div>

            </div>
        </motion.section>
    );
};

