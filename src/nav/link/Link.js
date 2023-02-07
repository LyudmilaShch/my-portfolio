import React from 'react';
import style from '../Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export const LinkComponent = (props: {text: string, navigateTo: string}) => {
    return (
            <Link
                activeClass={style.active}
                className={style.link}
                to={props.navigateTo}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >{props.text}</Link>
    )
}
