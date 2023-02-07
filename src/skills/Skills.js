import React from 'react';
import style from './Skills.module.scss'
import styleChildren from './skill/Skill.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from './skill/Skill';
import Title from "../common/components/title/Title";
import { ReactComponent as ReactIcon } from "../accets/image/react.svg";
import { ReactComponent as StorybookIcon } from "../accets/image/storybook.svg";
import { ReactComponent as TypescriptIcon } from "../accets/image/typescript.svg";
import { ReactComponent as ReduxIcon } from "../accets/image/redux.svg";
import { ReactComponent as SassIcon } from "../accets/image/sass.svg";
import { ReactComponent as GitIcon } from "../accets/image/git.svg";

const Skills = () => {

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title color={'#2c3e50'}
                       title={'My skills'}
                      />
                <div className={style.skills}>
                    <Skill
                        title={'React'}
                        description={'Class and functional components, components life-cycle methods, props, hooks, HOCs'}>
                        <ReactIcon  className={styleChildren.icon}/>
                    </Skill>

                    <Skill
                        title={'JS/TS'}
                        description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries'}>
                        <TypescriptIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Redux'}
                        description={'Flux-concept data flow, reducer, dispatch, redux-thunk, redux-toolkit'}>
                         <ReduxIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'SASS'}
                        description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries'}>
                         <SassIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Git'}
                        description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}>
                         <GitIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Storybook'}
                        description={'Testing components and modules, decorators'}>
                         <StorybookIcon  className={styleChildren.icon}/>
                    </Skill>
                </div>

            </div>
        </div>
    );
}

export default Skills;