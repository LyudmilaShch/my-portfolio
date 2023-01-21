import React from 'react';
import style from './Nav.module.scss'
import burgerIcon from '../accets/image/burger.png'
import closeIcon from '../accets/image/close.png'

const Nav = (props: {open: string, handleOpen: () => void, handleClose: () => void}) => {
    const closeClass = style.closeIcon
        + (props.open ? ' ' + style.closeMenu : '')
    const burgerClass = style.burgerMenuIcon
        + (props.open ? ' ' + style.openMenu : '')

    return (
        <div className={style.nav}>
            <a href={"#main"} className={style.link}>Main</a>
            <a href={"#skills"} className={style.link}>Skills</a>
            <a href={"#projects"} className={style.link}>Projects</a>
            <a href={"#contacts"} className={style.link}>Contacts</a>
            <div className={style.navTrigger}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={burgerClass}
                    onClick={props.handleOpen}
                    alt={'open menu'}
                />
                <img
                    src={closeIcon}
                    alt="close sidebar"
                    id={'hw5-menu-close'}
                    className={closeClass}
                    onClick={props.handleClose}
                />
            </div>
        </div>
    );
}

export default Nav;