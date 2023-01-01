import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/WhiteContainer.module.css'
import Title from "../common/components/title/Title";


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}
                       titleDescription={
                           'Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet\n' +
                           '                    diam ut eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id,\n' +
                           '                    molestie fringilla turpis.'
                       }/>
                <div className={style.container}>
                    <form className={style.form}>
                        <input className={style.input}></input>
                        <input className={style.input}></input>
                        <textarea className={style.textarea}></textarea>
                        <button>Отправить</button>
                    </form>
                    <div className={style.myContacts}>
                        <h5>Мои контакты</h5>
                        <span>Email: vvfihdihvddbvdb@mail.com</span><br/>
                        <span>Телефон: +7 999-99-99</span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Contacts;