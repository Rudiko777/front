import React from "react";
import styles from './specialOffers.module.css'
import {CollectionBtns} from "../ OurCollections/navigationBtn";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Scrollbar} from "swiper/modules";
import backImg1 from '../../../../images/page_1/main/offerImg1.png'
import backImg2 from '../../../../images/page_1/main/offerImg2.png'
import backImg3 from '../../../../images/page_1/main/offerImg3.png'


export const SpecialOffers = ()=>{

    return(
        <section className={"specialOffers"}>
            <div className={styles.specialOffersHeader}>
                <h2 className={"specialOffers-title"}>
                    Спецпредложения
                </h2>
                <CollectionBtns />
            </div>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={500}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                loop={true}>
                <SwiperSlide>
                    <div className={styles.specialOffersSLiderBox}>
                        <div className={styles.specialOffersCard1}>
                            <img src={backImg1} className={styles.specialOffersLogo}/>
                        </div>
                        <div className={styles.specialOffersCard1}>
                            <img src={backImg2} className={styles.specialOffersLogo}/>
                        </div>
                        <div className={styles.specialOffersCard1}>
                            <img src={backImg3} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}