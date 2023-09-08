import React from 'react';
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import PageIntro from "../../Components/PageIntro";
import sample from "../../assets/videos/2.mp4";
import {AiFillSignal} from "react-icons/ai";
import {FaCog, FaRubleSign} from "react-icons/fa";
import Layout from "../../Components/Layout";
import SquareList from "../../Components/SquareList";
import Footer from "../../Components/Footer";
import {Materials_data} from "./Materials_data";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import image from '../../assets/modules/m6m.png'

const Materials = () => {
    useDocumentTitle('МСП - Товары')
    return (
        <Background>
            <Navbar/>
            <PageIntro video={sample} title={'Товары'} image={image}
                       dataset={[
                           {title: 'Богатый опыт в тяжелых и масштабных проектах', text:'Наш опыт позволяет выполнить нам любой по сложности и масштабам проект вовремя и с отличительным качеством.', icon: <AiFillSignal/>},
                           {title: 'Возможность частичной оплаты', text:'Островки платежей при подтверждении платежеспособности контрагента. Все виды оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет.', icon: <FaRubleSign/>},
                           {title: 'Гибкость в подборе и выполнении услуг', text:'Изготовление по чертежам заказчика, а также изготовление чертежей. Снос, демонтаж и планировка участков.', icon: <FaCog/>}
                       ]}
            />
            <Layout>
                <SquareList data={Materials_data} type={'modal'} link={''}/>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Materials;