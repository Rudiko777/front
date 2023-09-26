import React from "react";
import styles from './specialOffers.module.css'

export const OffersInside = ({title})=>{
    return(
        <>
            <h4 className={styles.offersInsideTtile}>
                {title}
            </h4>
            <p>1,9% по льготной ставке</p>

        </>
    )
}