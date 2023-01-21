import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import todoImage from '../accets/image/img-03.jpg'
import socialNetworkImage from '../accets/image/img-01.jpg'
import Title from "../common/components/title/Title";

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistNetwork = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title color={'#2c3e50'}
                       title={'Projects'}
                       titleDescription={
                           'Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet\n' +
                           '                    diam ut eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id,\n' +
                           '                    molestie fringilla turpis.'
                       }/>

                <div className={style.projects}>
                    <Project
                        style={socialNetwork}
                        title={'Social network'}
                        description={'short description'}
                    />

                    <Project
                        style={todolistNetwork}
                        title={'Todolist'}
                        description={'short description'}
                    />
                </div>

            </div>
        </div>
    );
}

export default Projects;