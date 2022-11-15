import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
import Project from './project/Project';


const Projects = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои проекты</h2>
                <div className={style.works}>
                    <Project
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                    <Project
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />

                    <Project
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                    <Project
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                </div>

            </div>
        </div>
    );
}

export default Projects;