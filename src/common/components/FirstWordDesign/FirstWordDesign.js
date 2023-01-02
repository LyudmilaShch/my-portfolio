import React from 'react';
import style from './FirstWordDesign.module.scss'


const FirstWordDesign = (props) => {
    let titleFirstPart = props.title[0]
    let titleSecondPart = props.title.split(" ")[0].slice(1)
    let titleThirdPart = props.title.split(" ").filter(el => el !== props.title.split(" ")[0]).join(" ")

    return (
        <h3 className={style.projectTitle}>{titleFirstPart}
            <span className={style.projectTitleThin}>{titleSecondPart}</span>
            {` ${titleThirdPart}`}
        </h3>
    )
}

export default FirstWordDesign;