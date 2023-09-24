import React from "react";
import styles from './collections.module.css'
import '../../../../css/style.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CollectionBtns} from "./navigationBtn";
import {A11y, Navigation, Scrollbar} from "swiper/modules";




export const CollectionsSlider = ()=>{
    return(
        <section className={styles.collectionSlider}>
            <div className="container">
                <div className={styles.sliderHeader}>
                    <div className={styles.sliderHeaderCollectionBox}>
                        <h1 className={styles.sliderHeaderTitle}>
                            Наши подборки
                        </h1>
                        <button className={styles.sliderHeaderAllCol}>
                            Все подборки
                        </button>
                    </div>
                    <div>
                        <CollectionBtns />
                    </div>
                </div>
                <Swiper modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={500}
                        slidesPerView={1}
                        navigation={{
                            prevEl: styles.collectionLeftBtn,
                            nextEl: styles.collectionRightBtn
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}

                >
                    <SwiperSlide>
                        <div className={styles.colSliderBox}>
                            <div className={styles.colSlide1}>
                                <h4 className={styles.colSliderText1}>
                                    Семейные<br/>автомобили
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                            <div className={styles.colSlide2}>
                                <h4 className={styles.colSliderText2}>
                                    Автомобили для путешествий
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                            <div className={styles.colSlide3}>
                                <h4 className={styles.colSliderText3}>
                                    Городские автомобили
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.colSliderBox}>
                            <div className={styles.colSlide1}>
                                <h4 className={styles.colSliderText1}>
                                    Семейные<br/>автомобили
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                            <div className={styles.colSlide2}>
                                <h4 className={styles.colSliderText2}>
                                    Автомобили для путешествий
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                            <div className={styles.colSlide3}>
                                <h4 className={styles.colSliderText3}>
                                    Городские автомобили
                                </h4>
                                <button className={styles.colSliderBtn}>
                                    Посмотреть
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}