import React from "react";
import {useState} from "react";
import styles from './numOfScale.module.css'

export const NumOfScale = ({title})=>{
    return(
        <div className={styles.numberBox}>
            {title}
        </div>
    )
}