import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import s from './slider.module.scss';
import {motion} from 'framer-motion';
import {ConcurentsIcon} from "../../../../assets/icons/concurents-icon.tsx";
import {ChartIcon} from "../../../../assets/icons/Chart-icon.tsx";
import {StarIcon} from "../../../../assets/icons/star-icon.tsx";
import {VideoIcon} from "../../../../assets/icons/video-icon.tsx";
import {CubeIcon} from "../../../../assets/icons/cube-icon.tsx";
import {Star2Icon} from "../../../../assets/icons/star2-icon.tsx";
import {SofaIcon} from "../../../../assets/icons/sofa-icon.tsx";
import {handleScroll} from "../../../../utils/utils.ts";

const slidesData = [
    {icon: <ConcurentsIcon/>, title: "Опередите конкурентов!", subtitle: "станьте лидером на рынке мебели"},
    {icon: <ChartIcon/>, title: "Увеличьте продажи", subtitle: "привлекайте больше клиентов и повышайте свою прибыль."},
    {icon: <StarIcon/>, title: "Эффективное продвижение", subtitle: "выделяйте свою продукцию на фоне других."},
    {icon: <VideoIcon/>, title: "Видеообзор", subtitle: "рассказываем о возможностях программы"},
    {icon: <CubeIcon/>, title: "Экономия пространства", subtitle: "минимальные требования к площади торговых точек."},
    {
        icon: <Star2Icon/>,
        title: "Легкость в продаже диванов",
        subtitle: "упрощайте общение с клиентами и ускоряйте процесс покупки."
    },
    {
        icon: <SofaIcon/>,
        title: "Визуализация модификаций",
        subtitle: "удивляйте клиентов реалистичными 3D-моделями, чтобы они могли увидеть свои идеи в действии."
    }
];

export const Slider = () => {

    const imageAnimation = {
        hidden: {y: 100, opacity: 0},
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.6,
            }
        })
    }

    return (
        <motion.section
            id='advantages'
            initial='hidden'
            whileInView='visible'
            viewport={{
                amount: 0.4,
            }}
        >
            <div className={'container'}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    autoHeight={false}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        el: `.${s.customPagination}`
                    }}
                    // navigation={{
                    //     nextEl: `.${s.nextButton}`,
                    //     prevEl: `.${s.prevButton}`,
                    // }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                custom={index + 1}
                                variants={imageAnimation}

                            >
                                <a className={s.slide} href={''} onClick={(e)=> {
                                    e.preventDefault()
                                    if (slide.title === 'Видеообзор') {
                                        handleScroll('#video')
                                    }
                                }}>
                                    {slide.icon}
                                    <h3 className={s.title}>{slide.title}</h3>
                                    <p className={s.subtitle}>{slide.subtitle}</p>
                                </a>

                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={s.customPagination}></div> {/* Контейнер для пагинации */}
                {/*<div className={s.prevButton}>←</div> /!* Кнопка 'назад' *!/*/}
                {/*<div className={s.nextButton}>→</div> /!* Кнопка 'вперед' *!/*/}
            </div>
        </motion.section>
    );
};
