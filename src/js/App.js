import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Home";
import {AnyPage} from "./AnyPage";
import {Authorization} from "./Authorization";
import {CreditPage} from "./CreditPage";



export const App = ()=> {
    return (
        <div className={"App"}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/anyPage" element={<AnyPage/>}/>
                <Route path="/Auth" element={<Authorization/>}/>
                <Route path="/credit" element={<CreditPage/>}/>
            </Routes>
        </div>
    )
}


