import React from 'react';
import style from './DistantWork.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import FirstWordDesign from "../common/components/FirstWordDesign/FirstWordDesign";
import {Button} from "../common/components/button/Button";

const DistantWork = () => {

    return (
        <div className={style.mainBlock}>
            <div  className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                   <FirstWordDesign title={"Considering remote work options"} />
                </div>
                <Button link={"#contacts"} text={'hire me'}/>
            </div>
        </div>
    );
}

export default DistantWork;