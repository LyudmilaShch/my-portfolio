import React from 'react';
import style from './Main.module.scss'
import Header from "../header/Header";

const Main = () => {
    return (
        <div className={style.mainBlock} id="main">
            <Header/>
            <div className={style.container}>
                <div className={style.greetingText}>
                    <h2>front-end developer</h2>
                    <hr className={style.line}/>
                    <h1 className={style.thin}>Lyudmila
                        <strong>{' Shchepina'}</strong>
                    </h1>
                </div>
            </div>
            <div className={style.arrowDownSection}>
                <div className={style.wrapperDown}>
                    <a href={""} className={style.arrowDown}> </a>
                </div>
            </div>
        </div>
    );
}

export default Main;