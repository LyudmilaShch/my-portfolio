import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import todoImage from '../accets/image/todolist.png'
import socialNetworkImage from '../accets/image/socialNetwork.png'
import cardNetworkImage from '../accets/image/cardsNetwork.png'
import Title from "../common/components/title/Title";

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistNetwork = {
        backgroundImage: `url(${todoImage})`,
    };
    const cardNetwork = {
        backgroundImage: `url(${cardNetworkImage})`,
    };

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title color={'#2c3e50'}
                       title={'Projects'}
                      />
                <div className={style.projects}>
                    <Project
                        style={socialNetwork}
                        title={'Social network'}
                        description={'TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}
                        link={'https://github.com/LyudmilaShch/Samurai_way_TS'}
                    />

                    <Project
                        style={todolistNetwork}
                        title={'Todolist'}
                        description={'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'}
                        link={'https://github.com/LyudmilaShch/todolist-ts-main'}
                    />

                    <Project
                        style={cardNetwork}
                        title={'Card learning'}
                        description={'It was a command work. App for learning some cards'}
                        link={'https://github.com/AlexKazakq/friday-project-cards'}
                    />

                </div>

            </div>
        </div>
    );
}

export default Projects;