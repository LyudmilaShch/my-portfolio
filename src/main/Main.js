import React from 'react';
import style from './Main.module.scss'
import Header from "../header/Header";
import CV from "../accets/files/cv.pdf";

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
                    <div className={style.mainButtons}>
                        <a href={CV} download className={style.saveCVButton}>Download
                            CV</a>
                        <a href={"#contacts"} className={style.hireMeButton}>hire me</a>
                    </div>

                </div>
            </div>
            <div className={style.arrowDownSection}>
                <a href={"#skills"} className={style.wrapperDown}>
                    <div className={style.arrowDown}/>
                </a>
            </div>

        </div>
    );
}

export default Main;