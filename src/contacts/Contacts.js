import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock} id="contacts">
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title color={'#fff'}
                       title={'Contacts'}/>
                <div className={style.container}>
                    <form className={style.form}>
                        <div className={style.inputsLine}>
                            <input className={style.input} placeholder={'Name'}></input>
                            <input className={style.input} placeholder={'Phone'}></input>
                        </div>
                        <div className={style.inputsLine}>
                            <input className={style.input} placeholder={'Email'}></input>
                            <input className={style.input} placeholder={'Website'}></input>
                        </div>
                            <textarea className={style.textarea} placeholder={'Message'}></textarea>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;