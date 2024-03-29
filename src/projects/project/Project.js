import React, {useState} from 'react';
import style from './Project.module.scss'
import FirstWordDesign from "../../common/components/FirstWordDesign/FirstWordDesign";
import {Button} from "../../common/components/button/Button";
import {useTranslation} from "react-i18next";


const Project = (props) => {
    const {t} = useTranslation();
    const [show, setShow] = useState(false)
    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div className={style.project}
             style={props.style}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >

            {
                show ? (
                    <div className={style.text}>
                        <FirstWordDesign title={props.title}/>
                        <span className={style.description}>{props.description}</span>
                        <Button link={props.link} text={t("More")}/>
                    </div>
                ) : (
                    <>
                        <br/>
                    </>
                )}

        </div>


    )
        ;
}

export default Project;