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
import NavigationMain from "./js/page_1/header/navigation";
import Catalogs from "./js/page_1/header/catalogs";


const header = ReactDOM.createRoot(document.getElementById('header'))
const headerMain = ReactDOM.createRoot(document.getElementById('header-main'))
// const navigation = ReactDOM.createRoot(document.getElementById('header-nav'))
header.render(<HeaderTop />)
headerMain.render(<HeaderMain />)

// navigation.render(<NavigationMain />)


reportWebVitals();
