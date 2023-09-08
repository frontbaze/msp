import React from 'react';
import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import classes from '../../styles/Contacts/Contacts.module.scss'
import logo from '../../assets/logo.png'
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import MobileNavBar from "../../Components/MobileNavBar";

const Contacts = () => {
    useDocumentTitle('МСП - Контакты')
    return (
        <Background>
            <Navbar/>
            <MobileNavBar title={''}/>
            <Layout>
                <div className={classes['Contacts']}>
                    <div className={classes['Contacts__title']}>
                        Контактная информация
                    </div>
                    <div className={classes['Contacts__info']}>
                        <div className={classes['Contacts__info-text']}>
                            <div className={classes['Contacts__info-text-title']}>
                                ООО "МОНТАЖСТРОЙ ПОДРЯД"
                            </div>
                            <div className={classes['Contacts__info-text-subtitle']}>
                                Широкопрофильная строительная компания
                            </div>
                            <div className={classes['Contacts__info-text-services']}>
                                <div className={classes['Contacts__info-text-services-item']}>
                                    - Аренда спецтехники
                                </div>
                                <div className={classes['Contacts__info-text-services-item']}>
                                    - Металлоконструкции
                                </div>
                                <div className={classes['Contacts__info-text-services-item']}>
                                    - Быстровозводимые здания
                                </div>
                                <div className={classes['Contacts__info-text-services-item']}>
                                    - Гидроизоляция и покрытия
                                </div>
                                <div className={classes['Contacts__info-text-services-item']}>
                                    - Подрядные услуги
                                </div>
                            </div>
                            <div className={classes['Contacts__info-text-credentials']}>
                                <div className={classes['Contacts__info-text-credentials-title']}>
                                    Реквизиты:
                                </div>
                                <div className={classes['Contacts__info-text-credentials-item']}>
                                    ИНН: <span> 2540269183</span>
                                </div>
                                <div className={classes['Contacts__info-text-credentials-item']}>
                                    ОГРН:  <span> 1222500012591</span>
                                </div>
                                <div className={classes['Contacts__info-text-credentials-item']}>
                                    КПП:  <span> 254001001</span>
                                </div>
                                <div className={classes['Contacts__info-text-credentials-item']}>
                                    Адрес регистрации:<span> Приморский край, г. Владивосток ул. Калинина 42/7 офис 128 (8) </span>
                                </div>
                            </div>
                        </div>
                        <div className={classes['Contacts__info-logo']} style={{backgroundImage: `url(${logo})`}}/>
                    </div>
                </div>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Contacts;