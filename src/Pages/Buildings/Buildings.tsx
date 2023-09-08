import React from 'react';
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import PageIntro from "../../Components/PageIntro";
import video from "../../assets/videos/1.mp4";
import Layout from "../../Components/Layout";
import {FaBook, FaBookOpen, FaRubleSign} from "react-icons/fa";
import SquareList from "../../Components/SquareList";
import Footer from "../../Components/Footer";
import {Buildings_data} from "./Buildings_data";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import image from '../../assets/modules/m3m.png'

const Buildings = () => {
    useDocumentTitle('МСП - Быстровозводимые здания')
    return (
        <Background>
            <Navbar/>
            <PageIntro video={video} title={'Быстровозводимые здания'} image={image}
                       dataset={[
                           {title: 'Широкий выбор типов быстровозводимых объектов', text:'Каталог из более 30 типовых проектов быстровозводимых зданий. Также, при необходимости, разработка индивидуального проекта под ключ', icon: <FaBookOpen/>},
                           {title: 'Возможность частичной оплаты', text:'Островки платежей при подтверждении платежеспособности контрагента. Все виды оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет.', icon: <FaRubleSign/>},
                           {title: 'Вся сопутствующая документация', text:'Помощь в получении документации, в том числе разрешений на строительство зданий.', icon: <FaBook/>}
                       ]}
            />
            <Layout>
                <SquareList data={Buildings_data} link={''} type={'modal'}/>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Buildings;