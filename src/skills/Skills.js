import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
import Skill from './skill/Skill';


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скилы</h2>
                <div className={style.skills}>
                    <Skill
                        title={'React'}
                        description={'Полное описание навыка. Полное описание навыка.'}/>
                    <Skill
                        title={'JavaScript'}
                        description={'Полное описание навыка. Полное описание навыка.Полное описание навыка. Полное описание навыка.'}/>
                    <Skill
                        title={'CSS'}
                        description={'Полное описание навыка. '}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;