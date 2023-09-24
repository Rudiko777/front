import React from "react";
import SpecialOffers from "./main-files/special_offers";
import Reviews from "./main-files/reviews";
import SideBar from "./main-files/asidiks";
import {MainSlider} from "./main-slider/main-slider";
import {QuickCarInstallation} from "./QuickCarInstallation/QuickCarInstallation";
import {Komb} from "./main-files/komb";
import {Komb2} from "./main-files/komb-2";
import {CarCards} from "./carCards/carCards";
import {CollectionsSlider} from "./ OurCollections/collections";


class MainJs extends React.Component{
    render() {
        return(
            <>
                <MainSlider />
                <QuickCarInstallation />
                <div className={"container"}>
                    <CarCards />
                </div>
                <CollectionsSlider />
                <div className={"container"}>
                    <SpecialOffers />
                    <Reviews />
                    <SideBar />
                    <Komb />
                    <Komb2 />
                </div>
            </>
        )
    }
}

export default MainJs