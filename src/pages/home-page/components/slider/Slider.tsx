import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

import './style.scss';
import s from './slider.module.scss'

// import required modules
import {Pagination} from 'swiper/modules';
import {ConcurentsIcon} from "../../../../assets/icons/concurents-icon.tsx";
import {ChartIcon} from "../../../../assets/icons/Chart-icon.tsx";
import {StarIcon} from "../../../../assets/icons/star-icon.tsx";
import {VideoIcon} from "../../../../assets/icons/video-icon.tsx";
import {CubeIcon} from "../../../../assets/icons/cube-icon.tsx";
import {Star2Icon} from "../../../../assets/icons/star2-icon.tsx";
import {SofaIcon} from "../../../../assets/icons/sofa-icon.tsx";

export const Slider = () => {
    return (
        <section>
            <div className={'container'}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    effect={"fade"}
                    loop={true}
                    pagination={{

                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                    }}
                    modules={[Pagination]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <ConcurentsIcon/>
                        <h3 className={s.title}>Опередите конкурентов!</h3>
                        <p className={s.subtitle}>станьте лидером на рынке мебели</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChartIcon/>
                        <h3 className={s.title}>Увеличьте продажи</h3>
                        <p className={s.subtitle}>привлекайте больше клиентов и повышайте свою прибыль.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StarIcon/>
                        <h3 className={s.title}>Эффективное продвижение</h3>
                        <p className={s.subtitle}>выделяйте свою продукцию на фоне других.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <VideoIcon/>
                        <h3 className={s.title}>Видеообзор</h3>
                        <p className={s.subtitle}>Рассказываем о возможностях программы</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CubeIcon/>
                        <h3 className={s.title}>Экономия пространства —</h3>
                        <p className={s.subtitle}>минимальные требования к площади торговых точек.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Star2Icon/>
                        <h3 className={s.title}>Легкость в продаже диванов </h3>
                        <p className={s.subtitle}>упрощайте общение с клиентами и ускоряйте процесс покупки.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SofaIcon/>
                        <h3 className={s.title}>Визуализация модификаций</h3>
                        <p className={s.subtitle}>удивляйте клиентов реалистичными 3D-моделями, чтобы они могли увидеть свои идеи в действии.</p>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

