import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
import Project from './project/Project';


const Projects = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <div className={style.title}>
                    <h2>Мои проекты</h2>
                    <hr className={style.line}></hr>
                </div>
                <div  className={style.description}>
                    <p>Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet diam ut eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id, molestie fringilla turpis.</p>
                </div>

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