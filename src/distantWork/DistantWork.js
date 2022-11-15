import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from '../common/styles/BlackContainer.module.css'

const DistantWork = () => {
    return (
        <div className={style.mainBlock}>
            <div  className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                   <h5>Рассматриваю варианты удаленной работы</h5>
                </div>
                <button>Нанять меня</button>
            </div>
        </div>
    );
}

export default DistantWork;