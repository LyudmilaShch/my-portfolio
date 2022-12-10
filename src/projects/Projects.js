import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
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
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'Projects'}/>
                <div  className={style.description}>
                    <p>Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet diam ut eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id, molestie fringilla turpis.</p>
                </div>

                <div className={style.works}>
                    <Project
                        style={socialNetwork}
                        title={'Social network'}
                        description={'Краткое описание'}
                    />

                    <Project
                        style={todolistNetwork}
                        title={'Todolist'}
                        description={'Краткое описание'}
                    />
                </div>

            </div>
        </div>
    );
}

export default Projects;