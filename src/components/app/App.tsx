import React from 'react';
import style from "./App.module.css"
import Header from "../header/Header";
import Main from "../main/Main";

function App() {


    return (
        <div className={style.wrapper}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
