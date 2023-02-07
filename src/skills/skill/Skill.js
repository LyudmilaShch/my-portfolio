import React from 'react';
import style from './Skill.module.scss'

const Skill = ({children, title, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.circleIconParent}>
                            <div className={style.circleIconChild}>
                                    {children}
                            </div>
            </div>
            <h3>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    );
}

export default Skill;