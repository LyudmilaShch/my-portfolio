import React from 'react'
import style from './Sidebar.module.scss'


export const Sidebar = ({open, handleClose}) => {
    const sidebarClass = style.sidebar
        + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}
            <aside className={sidebarClass}>
                <nav id={'hw5-menu'} className={style.nav}>
                    <a href={"#main"} onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>Main</a>
                    <a href={"#skills"}  onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>Skills</a>
                    <a href={"#projects"}  onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>Projects</a>
                    <a href={"#contacts"} onClick={handleClose} className={({isActive}) => isActive ? style.active : "" }>Contacts</a>
                </nav>
            </aside>
        </>
    )
}
