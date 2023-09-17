import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/global.css'
import './css/reset.css'
import './css/style.css'
import reportWebVitals from './reportWebVitals';
import Header from './js/App'
import HeaderTop from "./js/page_1/header/header";
import HeaderMain from "./js/page_1/header/header-main";
import MainJs from "./js/page_1/main/mainJs";
import FooterMain from "./js/page_1/footer/footerGeneral";



const header = ReactDOM.createRoot(document.getElementById('header'))
const headerMain = ReactDOM.createRoot(document.getElementById('header-main'))
const main = ReactDOM.createRoot(document.getElementById('mainId'))
const footer = ReactDOM.createRoot(document.getElementById('footerId'))
// const navigation = ReactDOM.createRoot(document.getElementById('header-nav'))
header.render(<HeaderTop />)
headerMain.render(<HeaderMain />)
main.render(<MainJs />)
footer.render(<FooterMain />)




reportWebVitals();
