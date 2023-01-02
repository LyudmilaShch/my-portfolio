import React from 'react';
import style from './Title.module.scss'
import socialNetworkImage from "../../../accets/image/img-01.jpg";


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
            <div className={style.titleDescription} >
                <p style={colorText}>{props.titleDescription}</p>
            </div>
        </div>
    )
}

export default Title;