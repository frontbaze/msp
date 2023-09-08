import React from 'react';
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import PageIntro from "../../Components/PageIntro";
import video from "../../assets/videos/2.mp4";
import {FaBook, FaBookOpen, FaRubleSign} from "react-icons/fa";
import Layout from "../../Components/Layout";
import SquareList from "../../Components/SquareList";
import Footer from "../../Components/Footer";
import {Complex_data} from "./Complex_data";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import image from '../../assets/modules/m5m.png'

const Complex = () => {
    useDocumentTitle('МСП - Подрядные услуги')
    return (
        <Background>
            <Navbar/>
            <PageIntro video={video} title={'Подрядные услуги'} image={image}
                       dataset={[
                           {title: 'Богатый опыт в тяжелых и масштабных проектах', text:'Наш опыт позволяет выполнить нам любой по сложности и масштабам проект вовремя и с отличительным качеством.', icon: <FaBookOpen/>},
                           {title: 'Возможность частичной оплаты', text:'Островки платежей при подтверждении платежеспособности контрагента. Все виды оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет.', icon: <FaRubleSign/>},
                           {title: 'Лицензии и Документация.', text:'Вся сопутствующая документация: в том числе лицензий и нормативных актов.', icon: <FaBook/>}
                       ]}
            />
            <Layout>
                <SquareList data={Complex_data} link={''} type={'modal'}/>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Complex;