import style from "../../../projects/project/Project.module.scss";

export const Button = (props) => {
    return (
        <a href={props.link}
           className={style.btn}>{props.text}</a>
    )
}