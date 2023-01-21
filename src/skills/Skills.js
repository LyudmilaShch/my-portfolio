import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from './skill/Skill';
import Title from "../common/components/title/Title";
import reactIcon from "../accets/image/react.png";
import cssIcon from "../accets/image/css.png";
import jsIcon from "../accets/image/js.png";


const Skills = () => {

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title color={'#2c3e50'}
                       title={'My skills'}
                       titleDescription={
                           'Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet\n' +
                           '                    diam ut eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id,\n' +
                           '                    molestie fringilla turpis.'
                       }/>
                <div className={style.skills}>
                    <Skill
                        icon={reactIcon}
                        title={'React'}
                        description={'Maecenas sed laoreet urna. Praesent eget tristique tortor. Suspendisse consequat sed turpis in mattis.'}/>
                    <Skill
                        icon={jsIcon}
                        title={'JavaScript'}
                        description={'Maecenas sed laoreet urna. Praesent eget tristique tortor. Suspendisse consequat sed turpis in mattis.'}/>
                    <Skill
                        icon={cssIcon}
                        title={'CSS'}
                        description={'Maecenas sed laoreet urna. Praesent eget tristique tortor. Suspendisse consequat sed turpis in mattis.'}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;