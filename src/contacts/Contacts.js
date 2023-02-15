import React, {useState} from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import {useFormik} from "formik";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const {t} = useTranslation();
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
                           title={t('Contacts title')}/>
                    <div className={style.container}>
                        {isSendMessage
                            ? <div className={style.isSendMessage}>
                                <p>{t('Message has been sent')}</p>
                                <button onClick={()=>{setIsSendMessage(false)}}>{t('Button ok')}</button>
                            </div>
                            : <form className={style.form} id="contacts-form" onSubmit={formik.handleSubmit}>
                                <div className={style.inputsLine}>
                                    <input className={style.input}
                                           placeholder={t('Name')} {...formik.getFieldProps("name")}/>
                                    <input className={style.input}
                                           placeholder={t('Phone')} {...formik.getFieldProps("phone")}/>
                                </div>
                                <div className={style.inputsLine}>
                                    <input className={style.input} placeholder={t('Email')}
                                           type="email" {...formik.getFieldProps("email")}/>
                                    <input className={style.input}
                                           placeholder={t('Website')} {...formik.getFieldProps("website")}/>
                                </div>
                                <textarea className={style.textarea}
                                          placeholder={t('Message')} {...formik.getFieldProps("message")}/>
                                <button type="submit">{t('Send message')}</button>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;