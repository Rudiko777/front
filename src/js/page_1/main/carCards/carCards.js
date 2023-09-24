import React from "react";
import styles from './carCards.module.css'
import {MyCard} from "./myCard/myCard";

export const CarCards = ()=>{
    return(
        <section className={styles.carsInStock}>
            <h2 className={styles.carsInStockTitle}>
                Автомобили в наличии с ПТС
            </h2>
            <div className={styles.carCards}>
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
                <MyCard
                    title={"Skoda Octavia"}
                    char={"1.6 MPI MT Active"}
                    price={"1 615 000 ₽"}
                    credit={"115 000 ₽"}
                />
            </div>
            <button className={styles.showMoreCarsBtn}>
                Показать еще
            </button>
        </section>
    )
}

