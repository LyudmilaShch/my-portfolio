import React from 'react'
import style from './Sidebar.module.scss'
import {useTranslation} from "react-i18next";


export const Sidebar = ({open, handleClose}) => {
    const {t} = useTranslation();
    const sidebarClass = style.sidebar
        + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}
            <aside className={sidebarClass}>
                <nav id={'hw5-menu'} className={style.nav}>
                    <a href={"#main"} onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>{t('Main')}</a>
                    <a href={"#skills"}  onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>{t('Skills')}</a>
                    <a href={"#projects"}  onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>{t('Projects')}</a>
                    <a href={"#contacts"} onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>{t('Contacts')}</a>
                </nav>
            </aside>
        </>
    )
}
