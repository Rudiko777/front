import React, {useCallback, useRef} from "react";
import styles from './slider.module.css'
import auto from '../../../../images/page_1/main/car3.png'
import arrowLeft from '../../../../images/page_1/main/arrowleft.svg'
import arrowRight from '../../../../images/page_1/main/arrowRight.svg'
import '../../../../css/style.css'
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";


export const MainSlider = ()=>{

    // const sliderRef = useRef(null);
    //
    // const handlePrev = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slidePrev();
    // }, []);
    //
    // const handleNext = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slideNext();
    // }, []);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return(
        <div className={styles.sliderContainer}>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination"
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>
                        <div className={styles.mainSliderLeftBox} ref={navigationPrevRef}>
                            <button  className={styles.mainSliderLeftBoxBTN} >
                                <div>
                                    <img className={styles.mainSliderLeft} src={arrowLeft}/>
                                </div>
                            </button>
                        </div>
                        <div className={styles.mainSliderRightBox} ref={navigationPrevRef}>
                            <button  className={styles.mainSliderRightBoxBTN} >
                                <div>
                                    <img className={styles.mainSliderLeft} src={arrowRight}/>
                                </div>
                            </button>
                        </div>
                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>
                        <div className={styles.mainSliderLeftBox} ref={navigationPrevRef}>
                            <button  className={styles.mainSliderLeftBoxBTN} >
                                <div>
                                    <img className={styles.mainSliderLeft} src={arrowLeft}/>
                                </div>
                            </button>
                        </div>
                        <div className={styles.mainSliderRightBox} ref={navigationPrevRef}>
                            <button  className={styles.mainSliderRightBoxBTN} >
                                <div>
                                    <img className={styles.mainSliderLeft} src={arrowRight}/>
                                </div>
                            </button>
                        </div>
                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}