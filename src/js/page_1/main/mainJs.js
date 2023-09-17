import React from "react";
import CarsInStock from "./main-files/cars_in_stock";
import SpecialOffers from "./main-files/special_offers";
import Reviews from "./main-files/reviews";
import SideBar from "./main-files/asidiks";
import {MainSlider} from "./main-slider/main-slider";

class MainJs extends React.Component{
    render() {
        return(
            <>
                <MainSlider />
                <div className={"container"}>
                    <CarsInStock />
                    <SpecialOffers />
                    <Reviews />
                    <SideBar />
                </div>
            </>
        )
    }
}

export default MainJs