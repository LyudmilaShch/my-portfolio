import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import FirstWordDesign from "../common/components/FirstWordDesign/FirstWordDesign";
import telegramIcon from "../accets/image/telegram.png"
import codewars from "../accets/image/codewars.png"
import github from "../accets/image/github.png"
import whatsApp from "../accets/image/whatsapp.png"


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerInfo}>
                    <div className={style.text}>
                        <FirstWordDesign title={'Lyudmila Shchepina'} colorText={'#21c2f8'}/>
                    </div>
                    <div className={style.socialIcons}>
                        <a href="https://t.me/lyudmila_shch"><img src={telegramIcon} className={style.icon}/></a>
                        <a href="https://wa.me/79994420043"><img src={whatsApp} className={style.icon}/></a>
                        <a href="https://github.com/LyudmilaShch"><img src={github} className={style.icon}/></a>
                        <a href="https://www.codewars.com/users/LyudmilaShchepina"><img src={codewars} className={style.icon}/></a>
                    </div>
                </div>
                <div className={style.right}>
                    <p>All Right Reserved!</p>
                    <p>2023</p>
                </div>

            </div>
        </div>
    )
        ;
}

export default Footer;