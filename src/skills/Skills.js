import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from './skill/Skill';
import Title from "../common/components/title/Title";
import reactIcon from "../accets/image/react.png";
import reduxIcon from "../accets/image/redux.png";
import jsIcon from "../accets/image/js.png";
import sassIcon from "../accets/image/sass.png";
import gitIcon from "../accets/image/git.png";
import storybookIcon from "../accets/image/storybook.svg";


const Skills = () => {

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title color={'#2c3e50'}
                       title={'My skills'}
                      />
                <div className={style.skills}>
                    <Skill
                        icon={reactIcon}
                        title={'React'}
                        description={'Class and functional components, components life-cycle methods, props, hooks, HOCs'}/>
                    <Skill
                        icon={jsIcon}
                        title={'JS/TS'}
                        description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries'}/>
                    <Skill
                        icon={reduxIcon}
                        title={'Redux'}
                        description={'Flux-concept data flow, reducer, dispatch, redux-thunk, redux-toolkit'}/>
                    <Skill
                        icon={sassIcon}
                        title={'SASS'}
                        description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries'}/>
                    <Skill
                        icon={gitIcon}
                        title={'Git'}
                        description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}/>
                    <Skill
                        icon={storybookIcon}
                        title={'Storybook'}
                        description={'Testing components and modules, decorators'}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;