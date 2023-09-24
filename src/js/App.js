import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Home";
import {AnyPage} from "./AnyPage";


export const App = ()=> {
    return (
        <div className={"App"}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/anyPage" element={<AnyPage/>}/>
            </Routes>
        </div>
    )
}


