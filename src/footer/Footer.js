import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import FirstWordDesign from "../common/components/FirstWordDesign/FirstWordDesign";
import { ReactComponent as Telegram } from "../accets/image/telegram.svg";
import { ReactComponent as WhatsApp } from "../accets/image/whatsapp.svg";
import { ReactComponent as Github } from "../accets/image/github.svg";
import { ReactComponent as Codewars } from "../accets/image/codewars.svg";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerInfo}>
                    <div className={style.text}>
                        <FirstWordDesign title={'Lyudmila Shchepina'} colorText={'#21c2f8'}/>
                    </div>
                    <div className={style.socialIcons}>
                        <a href="https://t.me/lyudmila_shch"><Telegram className={style.icon}/></a>
                        <a href="https://wa.me/79994420043"><WhatsApp className={style.icon}/></a>
                        <a href="https://github.com/LyudmilaShch"><Github className={style.icon}/></a>
                        <a href="https://www.codewars.com/users/LyudmilaShchepina"><Codewars className={style.icon}/></a>

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