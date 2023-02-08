import React, {useState} from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import {useFormik} from "formik";
import axios from "axios";

const Contacts = () => {
    const [isSendMessage, setIsSendMessage] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            website: '',
            message: ''
        },
        onSubmit: (values) => {
            axios.post("https://gmail-node-js.vercel.app/sendMessage", {
                name: values.name,
                phone: values.phone,
                email: values.email,
                website: values.website,
                message: values.message
            })
                .then(() => {
                    setIsSendMessage(true)
                })
        }
    });

    return (<div>
            <div className={style.contactsBlock} id="contacts">
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title color={'#fff'}
                           title={'Contacts'}/>
                    <div className={style.container}>
                        {isSendMessage
                            ? <div className={style.isSendMessage}>
                                <p>Thanks. Your message ha been sent. I will contacts you
                                    shortly</p>
                                <button onClick={()=>{setIsSendMessage(false)}}>Ok</button>
                            </div>
                            : <form className={style.form} id="contacts-form" onSubmit={formik.handleSubmit}>
                                <div className={style.inputsLine}>
                                    <input className={style.input}
                                           placeholder={'Name'} {...formik.getFieldProps("name")}/>
                                    <input className={style.input}
                                           placeholder={'Phone'} {...formik.getFieldProps("phone")}/>
                                </div>
                                <div className={style.inputsLine}>
                                    <input className={style.input} placeholder={'Email'}
                                           type="email" {...formik.getFieldProps("email")}/>
                                    <input className={style.input}
                                           placeholder={'Website'} {...formik.getFieldProps("website")}/>
                                </div>
                                <textarea className={style.textarea}
                                          placeholder={'Message'} {...formik.getFieldProps("message")}/>
                                <button type="submit">Send message</button>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;