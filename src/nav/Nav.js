import React from 'react';
import style from './Nav.module.scss'
import burgerIcon from '../accets/image/burger.png'
import closeIcon from '../accets/image/close.png'
import {LinkComponent} from "./link/Link";

const Nav = (props: {open: string, handleOpen: () => void, handleClose: () => void}) => {
    const closeClass = style.closeIcon
        + (props.open ? ' ' + style.closeMenu : '')
    const burgerClass = style.burgerMenuIcon
        + (props.open ? ' ' + style.openMenu : '')

    return (
        <div className={style.nav}>
            <LinkComponent text={'Main'} navigateTo={'main'}/>
            <LinkComponent text={'Skills'} navigateTo={'skills'}/>
            <LinkComponent text={'Projects'} navigateTo={'projects'}/>
            <LinkComponent text={'Contacts'} navigateTo={'contacts'}/>
            <div className={style.navTrigger}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={burgerClass}
                    onClick={props.handleOpen}s
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