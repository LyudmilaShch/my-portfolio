import React from 'react';
import style from './Works.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
import Work from './work/Work';


const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                    <Work
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />

                    <Work
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                    <Work
                        title={'Название проекта'}
                        description={'Краткое описание'}
                    />
                </div>

            </div>
        </div>
    );
}

export default Works;