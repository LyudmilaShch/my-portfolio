import React from 'react';
import style from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.circleIconParent}>
                <div className={style.circleIconChild}>
                    <img src={props.icon} className={style.icon}/>
                </div>
            </div>
            <h3>{props.title}</h3>
            <p  className={style.description}>{props.description}</p>
        </div>
    );
}

export default Skill;