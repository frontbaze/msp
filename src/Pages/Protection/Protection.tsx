import React from 'react';
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import PageIntro from "../../Components/PageIntro";
import sample from "../../assets/videos/1.mp4";
import Layout from "../../Components/Layout";
import {AiFillSignal} from "react-icons/ai";
import {FaCog, FaRubleSign} from "react-icons/fa";
import SquareList from "../../Components/SquareList";
import {Protection_data} from "./Protection_data";
import Footer from "../../Components/Footer";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import image from '../../assets/modules/m4a.png'

const Protection = () => {
    useDocumentTitle('МСП - Покрытия')
    return (
        <Background>
            <Navbar/>
            <PageIntro video={sample} title={'Гидроизоляция и защитные покрытия'} image={image}
                       dataset={[
                           {title: 'Богатый опыт в тяжелых и масштабных проектах', text:'Наш опыт позволяет выполнить нам любой по сложности и масштабам проект вовремя и с отличительным качеством.', icon: <AiFillSignal/>},
                           {title: 'Возможность частичной оплаты', text:'Островки платежей при подтверждении платежеспособности контрагента. Все виды оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет.', icon: <FaRubleSign/>},
                           {title: 'Гибкость в подборе и выполнении услуг', text:'Изготовление по чертежам заказчика, а также изготовление чертежей. Снос, демонтаж и планировка участков.', icon: <FaCog/>}
                       ]}
            />
            <Layout>
                <SquareList data={Protection_data} type={'modal'} link={''}/>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Protection;