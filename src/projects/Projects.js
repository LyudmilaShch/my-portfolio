import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import todoImage from '../accets/image/todolist.png'
import socialNetworkImage from '../accets/image/socialNetwork.png'
import cardNetworkImage from '../accets/image/cardsNetwork.png'
import calculatorImage from '../accets/image/calculator.png'
import notesImage from '../accets/image/notes.png'
import Title from "../common/components/title/Title";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const {t} = useTranslation();
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistNetwork = {
        backgroundImage: `url(${todoImage})`,
    };
    const cardNetwork = {
        backgroundImage: `url(${cardNetworkImage})`,
    };
    const calculatorNetwork = {
        backgroundImage: `url(${calculatorImage})`,
    };
    const notesNetwork = {
        backgroundImage: `url(${notesImage})`,
    };

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title color={'#2c3e50'}
                       title={t('Projects title')}
                />
                <div className={style.projects}>
                    <Project
                        style={socialNetwork}
                        title={t('Project Social network title')}
                        description={t('Project Social network description')}
                        link={'https://github.com/LyudmilaShch/Samurai_way_TS'}
                    />
                    <Project
                        style={todolistNetwork}
                        title={t('Project Todolist title')}
                        description={t('Project Todolist description')}
                        link={'https://github.com/LyudmilaShch/todolist-ts-main'}
                    />
                    <Project
                        style={cardNetwork}
                        title={t('Project Card learning title')}
                        description={t('Project Card learning description')}
                        link={'https://github.com/AlexKazakq/friday-project-cards'}
                    />
                    <Project
                        style={calculatorNetwork}
                        title={t('Project Calculator title')}
                        description={t('Project Calculator description')}
                        link={'https://github.com/LyudmilaShch/calculator'}
                    />
                    <Project
                        style={notesNetwork}
                        title={t('Project Notes title')}
                        description={t('Project Notes description')}
                        link={'https://github.com/LyudmilaShch/metacommerce-test'}
                    />
                </div>

            </div>
        </div>
    );
}

export default Projects;