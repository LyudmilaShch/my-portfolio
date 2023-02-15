import React from 'react';
import style from './DistantWork.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import FirstWordDesign from "../common/components/FirstWordDesign/FirstWordDesign";
import {Button} from "../common/components/button/Button";
import {useTranslation} from "react-i18next";

const DistantWork = () => {
    const {t} = useTranslation();

    return (
        <div className={style.mainBlock}>
            <div  className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                   <FirstWordDesign title={t('Considering remote work')} />
                </div>
                <Button link={"#contacts"} text={t('hire me')}/>
            </div>
        </div>
    );
}

export default DistantWork;