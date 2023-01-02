import React, {useState} from 'react';
import style from './Project.module.scss'
import FirstWordDesign from "../../common/components/FirstWordDesign/FirstWordDesign";


const Project = (props) => {
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
                        <a href={" "}
                           className={style.buttonProject}>More</a>
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