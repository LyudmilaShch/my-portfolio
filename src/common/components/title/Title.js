import React from 'react';
import style from './Title.module.scss'


const Title = (props) => {
    return (
        <div className={style.titleBlock}>
            <div className={style.title}>
                <h2>{props.title}</h2>
                <hr className={style.line}></hr>
            </div>
            <div className={style.titleDescription}>
                <p>{props.titleDescription}</p>
            </div>
        </div>
    )
}

export default Title;