import React from 'react';
import style from './Main.module.scss'
import Header from "../header/Header";
import mainPhoto from "../accets/image/photo.png"
import {Button} from "../common/components/button/Button";

<Button link={""} text={'hire me'}/>
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
                    <Button link={"#contacts"} text={'hire me'}/>
                </div>
            </div>
            <div className={style.arrowDownSection}>
                <a href={"#skills"}>
                <div className={style.wrapperDown}>
                    <div className={style.arrowDown}/>
                </div>
                </a>
            </div>

        </div>
    );
}

export default Main;