import React from "react";
import styles from './slider.module.css'
import auto from '../../../../images/page_1/main/car3.png'
import arrowLeft from '../../../../images/page_1/main/arrowleft.svg'
import arrowRight from '../../../../images/page_1/main/arrowRight.svg'
import '../../../../css/style.css'



export const MainSlider = ()=>{
    return(
        <div className={styles.sliderContainer}>
            <div className={"swiper"}>
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
                    <div className={styles.mainSliderLeftBox}>
                        <img className={styles.mainSliderLeft} src={arrowLeft}/>
                    </div>
                    <div className={styles.mainSliderRightBox}>
                        <img className={styles.mainSliderRight} src={arrowRight}/>
                    </div>
                    <div className={"swiper-pagination"}></div>
                </div>
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
                    <div className={styles.mainSliderLeftBox}>
                        <img className={styles.mainSliderLeft} src={arrowLeft}/>
                    </div>
                    <div className={styles.mainSliderRightBox}>
                        <img className={styles.mainSliderRight} src={arrowRight}/>
                    </div>
                    <div className={"swiper-pagination"}></div>
                </div>
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
                    <div className={styles.mainSliderLeftBox}>
                        <img className={styles.mainSliderLeft} src={arrowLeft}/>
                    </div>
                    <div className={styles.mainSliderRightBox}>
                        <img className={styles.mainSliderRight} src={arrowRight}/>
                    </div>
                    <div className={"swiper-pagination"}></div>
                </div>
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
                    <div className={styles.mainSliderLeftBox}>
                        <img className={styles.mainSliderLeft} src={arrowLeft}/>
                    </div>
                    <div className={styles.mainSliderRightBox}>
                        <img className={styles.mainSliderRight} src={arrowRight}/>
                    </div>
                    <div className={"swiper-pagination"}></div>
                </div>
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
                    <div className={styles.mainSliderLeftBox}>
                        <img className={styles.mainSliderLeft} src={arrowLeft}/>
                    </div>
                    <div className={styles.mainSliderRightBox}>
                        <img className={styles.mainSliderRight} src={arrowRight}/>
                    </div>
                    <div className={"swiper-pagination"}></div>
                </div>
            </div>
        </div>
    )
}