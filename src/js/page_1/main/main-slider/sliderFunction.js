import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../../css/style.css'
import styles from './slider.module.css'

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: styles.mainSliderRightBox,
        prevEl: styles.mainSliderLeftBox
    }
})
console.log(5555)
