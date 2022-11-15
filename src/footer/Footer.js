import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/BlackContainer.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.text}>
                    <h5>Иванов Иван</h5>
                </div>
                <div className={style.imgContainer}>
                    <div className={style.image1}></div>
                    <div className={style.image2}></div>
                    <div className={style.image1}></div>
                    <div className={style.image2}></div>
                </div>
                <div>2022 Все права защищены</div>
            </div>
        </div>
    );
}

export default Footer;