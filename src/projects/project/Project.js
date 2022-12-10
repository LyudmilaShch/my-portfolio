import React, {useState} from 'react';
import style from './Project.module.css'


const Project = (props) => {
    const [show, setShow] = useState(false)
    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
let titleFirstPart = props.title[0]
let titleSecondPart = props.title.split(" ")[0].slice(1)
let titleThirdPart = props.title.split(" ").filter(el => el !== props.title.split(" ")[0]).join(" ")

    return (
        <div className={style.work}
           style={props.style}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
        >

            {
                show ? (
                    <div className={style.text} >
                        <h3 className={style.projectTitle}>{titleFirstPart}
                                <span className={style.projectTitleThin}>{titleSecondPart}</span>
                            {` ${titleThirdPart}`}
                        </h3>
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