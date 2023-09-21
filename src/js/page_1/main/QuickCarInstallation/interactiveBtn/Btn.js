import React from "react";
import styles from './interBtn.module.css'
import point from '../../../../../images/page_1/main/pointBlack.svg'

export const Btn = ({title})=>{
    return(
        <>
            <button className={styles.Btn}>
                <div>
                    <p>{title}</p>
                    <img className={styles.pointImg} src={point}/>
                </div>
            </button>
        </>
    )
}