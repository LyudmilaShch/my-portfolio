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
import {useTranslation} from "react-i18next";

const Skills = () => {
    const {t} = useTranslation();

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title color={'#2c3e50'}
                       title={t('My skills')}
                      />
                <div className={style.skills}>
                    <Skill
                        title={'React'}
                        description={t('description React')}>
                        <ReactIcon  className={styleChildren.icon}/>
                    </Skill>

                    <Skill
                        title={'JS/TS'}
                        description={t('description JS/TS')}>
                        <TypescriptIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Redux'}
                        description={t('description Redux')}>
                         <ReduxIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'SASS'}
                        description={t('description SASS')}>
                         <SassIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Git'}
                        description={t('description Git')}>
                         <GitIcon  className={styleChildren.icon}/>
                    </Skill>
                    <Skill
                        title={'Storybook'}
                        description={t('description Storybook')}>
                         <StorybookIcon  className={styleChildren.icon}/>
                    </Skill>
                </div>

            </div>
        </div>
    );
}

export default Skills;