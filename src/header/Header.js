import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import {Sidebar} from "../sidebar/Sidebar";
import {useLocalStorage} from "../hooks/use-localStorage";
import i18n from "../i18next";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [language, setLanguage] = useLocalStorage('language', 'ru')

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    const handleLngChangeOnEn = () => {
        i18n.changeLanguage("en")
        setLanguage("en")
    }
    const handleLngChangeOnRu = () => {
        i18n.changeLanguage("ru")
        setLanguage("ru")
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <div className={style.header}>
            <Sidebar open={open} handleClose={handleClose}/>
            <Nav open={open} handleOpen={handleOpen} handleClose={handleClose} language={language}
                 handleLngChangeOnEn={handleLngChangeOnEn} handleLngChangeOnRu={handleLngChangeOnRu}/>
        </div>
    );
}

export default Header;