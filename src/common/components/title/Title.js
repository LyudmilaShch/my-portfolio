import React from 'react';
import style from './Title.module.scss'


const Title = (props) => {
    const colorText = {
        color: props.color
    };
    const colorLine = {
        backgroundColor: props.color
    };

    return (
        <div className={style.titleBlock} >
            <div className={style.title} style={colorText}>
                <h2>{props.title}</h2>
                <hr className={style.line} style={colorLine}></hr>
            </div>
        </div>
    )
}

export default Title;