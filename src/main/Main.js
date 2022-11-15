import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/BlackContainer.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div  className={`${styleContainer.container} ${style.container}`}>
                <div className={style.greetingText}>
                    <h1>Людмила Щепина</h1>
                    <h5>front-end разработчик</h5>
                </div>
                <div className={style.greetingPhoto}>

                </div>
            </div>
        </div>
    );
}

export default Main;