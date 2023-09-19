import React from "react";
import styles from './QuickCarInstallation.module.css'
import {carArrayOne, carArrayTwo, carArrayThree, carArrayFour, carArrayFive} from "./specialFiles";
import {OneMark} from "./oneMark/oneMark";

export const QuickCarInstallation = ()=>{

    const CarArrayOne = carArrayOne.map((item) =>{
        return(
            <div className={styles.carColumn} key={item.id}>
                <OneMark title={item.name} logo={item.logo}/>
            </div>
        )
    })

    const CarArrayTwo = carArrayTwo.map((item) =>{
        return(
            <div className={styles.carColumn} key={item.id}>
                <OneMark title={item.name} logo={item.logo}/>
            </div>
        )
    })


    const CarArrayThree = carArrayThree.map((item) =>{
        return(
            <div className={styles.carColumn} key={item.id}>
                <OneMark title={item.name} logo={item.logo}/>
            </div>
        )
    })


    const CarArrayFour = carArrayFour.map((item) =>{
        return(
            <div className={styles.carColumn} key={item.id}>
                <OneMark title={item.name} logo={item.logo}/>
            </div>
        )
    })


    const CarArrayFive = carArrayFive.map((item) =>{
        return(
            <div className={styles.carColumn} key={item.id}>
                <OneMark title={item.name} logo={item.logo}/>
            </div>
        )
    })




    return(
        <section className={styles.installation}>
            <div className="container">
                <div className={styles.installationBox}>
                    <div className={styles.installationCars}>
                        <div className={styles.installationLinksAll}>
                            {CarArrayOne}
                        </div>
                        <div className={styles.installationLinksAll}>
                            {CarArrayTwo}
                        </div>
                        <div className={styles.installationLinksAll}>
                            {CarArrayThree}
                        </div>
                        <div className={styles.installationLinksAll}>
                            {CarArrayFour}
                        </div>
                        <div className={styles.installationLinksAll}>
                            {CarArrayFive}
                        </div>
                    </div>
                    <div className={styles.installationInput}>

                    </div>
                </div>
            </div>
        </section>
    )
}