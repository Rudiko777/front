import React from "react";
import MyContacts from "./footer-files/my_contacts";

class FooterMain extends React.Component{
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
            <div className={"footer-containerFluid"}>
                <div className="footer-head-line">
                    <div className="container">
                        <nav className="footer-navigation">
                            <ul className="footer-nav-list">
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        {this.state.carCatalog}
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        {this.state.carsWithMileage}
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        {this.state.creditAndInstallments}
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        {this.state.specialOffers}
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        {this.state.taxiOnCredit}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <MyContacts />
            </div>
        )
    }
}

export default FooterMain