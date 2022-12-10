import React from 'react';
import style from './Title.module.css'


const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
            <hr className={style.line}></hr>
        </div>
    )
}

export default Title;