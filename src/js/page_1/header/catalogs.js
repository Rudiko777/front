import React from "react";
import '../../.././css/style.css'
import point from '../../../images/page_1/header-main/pointing.svg'

class Catalogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            carCatalog: "Каталог авто",
            carsWithMileage: "Авто с пробегом",
            creditAndInstallments: "Кредит и рассрочка",
            specialOffers: "Спецпредложения",
            taxiOnCredit: "Такси в кредит"
        }
    }
    render() {
        return(
            <div className={"header-catalogs"}>
                <ul className="header-catalogs-list">
                    <li className="header-catalogs-item">
                        <h4 className={"header-catalog-item-title"}>
                            {this.state.carCatalog}
                        </h4>
                        <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                    </li>
                    <li className="header-catalogs-item">
                        <h4 className={"header-catalog-item-title"}>
                            {this.state.carsWithMileage}
                        </h4>
                        <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                    </li>
                    <li className="header-catalogs-item">
                        <h4 className={"header-catalog-item-title"}>
                            {this.state.creditAndInstallments}
                        </h4>
                        <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                    </li>
                    <li className="header-catalogs-item">
                        <h4 className={"header-catalog-item-title"}>
                            {this.state.specialOffers}
                        </h4>
                        <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                    </li>
                    <li className="header-catalogs-item">
                        <h4 className={"header-catalog-item-title"}>
                            {this.state.taxiOnCredit}
                        </h4>
                    </li>
                </ul>
                <ul className="interactive-list">
                    <li className="interactive-item"></li>
                    <li className="interactive-item"></li>
                    <li className="interactive-item"></li>
                </ul>
            </div>
        )
    }
}

export default Catalogs