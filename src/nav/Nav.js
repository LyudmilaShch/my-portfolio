import React from 'react';
import style from './Nav.module.scss'
import burgerIcon from '../accets/image/burger.png'
import closeIcon from '../accets/image/close.png'
import {LinkComponent} from "./link/Link";
import {useTranslation} from "react-i18next";

const Nav = ({open, handleOpen, handleClose, language, handleLngChangeOnEn, handleLngChangeOnRu}) => {
    const {t} = useTranslation();
    const closeClass = style.closeIcon
        + (open ? ' ' + style.closeMenu : '')
    const burgerClass = style.burgerMenuIcon
        + (open ? ' ' + style.openMenu : '')

    return (
        <div className={style.nav}>
            <LinkComponent text={t('Main')} navigateTo={'main'}/>
            <LinkComponent text={t('Skills')} navigateTo={'skills'}/>
            <LinkComponent text={t('Projects')} navigateTo={'projects'}/>
            <LinkComponent text={t('Contacts')} navigateTo={'contacts'}/>
            <div className={style.changeLngButtonGroup}>
                <button onClick={handleLngChangeOnEn} className={language === 'en' ? style.buttonActive : style.buttonNotActive}>en</button>
                <button onClick={handleLngChangeOnRu} className={language === 'ru' ? style.buttonActive : style.buttonNotActive}>ru</button>
            </div>
            <div className={style.navTrigger}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={burgerClass}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
                <img
                    src={closeIcon}
                    alt="close sidebar"
                    id={'hw5-menu-close'}
                    className={closeClass}
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default Nav;