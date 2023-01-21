import React from 'react';
import style from './FirstWordDesign.module.scss'
import s from './../../styles/sass/variables.scss'
import './../../styles/sass/variables.scss';


const FirstWordDesign = (props) => {
    const colorText = {
        color: props.colorText  ? props.colorText : 'white'
    };
    const colorThinText = {
        color: props.colorThinText ? props.colorThinText : 'white'
    };


    let titleFirstPart = props.title[0]
    let titleSecondPart = props.title.split(" ")[0].slice(1)
    let titleThirdPart = props.title.split(" ").filter(el => el !== props.title.split(" ")[0]).join(" ")

    return (
        <h3 className={style.projectTitle}  style={colorText}>{titleFirstPart}
            <span className={style.projectTitleThin} style={colorThinText}>{titleSecondPart}</span>
            {` ${titleThirdPart}`}
        </h3>
    )
}

export default FirstWordDesign;