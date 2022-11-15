import React, {useState} from 'react';
import style from './Work.module.css'


const Work = (props) => {
    const [show, setShow] = useState(false)
    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    return (
        <a href={" "} className={style.work}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>

            {
                show ? (
                    <div className={style.text}>
                                <h5>{props.title}</h5>
                                <span className={style.description}>{props.description}</span>
                    </div>
                ) : (
                    <>
                        <br/>
                    </>
                )}

        </a>


    )
        ;
}

export default Work;