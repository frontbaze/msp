import React, {useEffect} from 'react';
import Intro from "./Intro";
import Partners from "./Partners";
import Score from "./Score";
import Module from "./Module";
import m1a from '../../assets/modules/m1a.png'
import m1m from '../../assets/modules/m1m.png'
import m2a from '../../assets/modules/m2a.png'
import m2m from '../../assets/modules/m2m.png'
import m3a from '../../assets/modules/m3a.png'
import m3m from '../../assets/modules/m3m.png'
import m4a from '../../assets/modules/m4a.png'
import m4m from '../../assets/modules/m4m.png'
import m5a from '../../assets/modules/m5a.png'
import m5m from '../../assets/modules/m5m.png'
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import {setDefaultCategory} from "../../store/ActionCreators/VehicleActionCreators";
import {useAppDispatch} from "../../hooks/redux";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import MainMap from "./MainMap";
import Footer from "../../Components/Footer";
import MobileNavBar from '../../Components/MobileNavBar';

const Main = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setDefaultCategory())
    }, [])
    useDocumentTitle('МСП - Главная')

    return (
        <>
            <Background>
                {/*<Loader/>*/}
                <Navbar/>
                <Intro/>
                <Partners/>
                <Score/>
                <Module
                    type={'default'}
                    title={'Аренда спецтехники'}
                    imageMain={m1m}
                    imageAdditional={m1a}
                    advantagesTitle={'Оперативность'}
                    advantages={
                        [
                            'Круглосуточная поддержка',
                            'Оперативная помощь при возникновении проблем',
                            'Аренда спецтехники с профессиональным экипажем',
                            'Доставка спецтехники по Дальневосточному Федеральному Округу.',
                            'Эксплуатация в любых климатических условиях',
                            'Все доступные формы оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет'
                        ]}
                    link={'/vehicle'}
                />
                <Module
                    type={'reversed'}
                    title={'Металло- конструкции'}
                    imageMain={m2m}
                    imageAdditional={m2a}
                    advantagesTitle={'Качество и надежность'}
                    advantages={[
                        'Изготовление по чертежам заказчика.',
                        'Изготовление чертежей.',
                        'Кратчайшие сроки.',
                        'Любые объемы и материалы.',
                        'Доставка изготовленных металлоконструкций на объект.'
                    ]}
                    link={'/metal'}
                />
                <Module
                    type={'default'}
                    title={'Быстро- возводимые здания'}
                    imageMain={m3m}
                    imageAdditional={m3a}
                    advantagesTitle={'Кратчайшие сроки'}
                    advantages={[
                        'Широкий выбор типов быстровозводимых объектов',
                        'Доступная стоимость и лояльные цены',
                        'Профессиональная техника и актуальные технологии.',
                        'Высокая скорость и качество сдачи проекта.',
                        'Ввод в эксплуатацию и последующее обслуживание.'
                    ]}
                    link={'/buildings'}
                />
                <Module
                    type={'reversed'}
                    title={'Гидро- изоляция и покрытия'}
                    imageMain={m4m}
                    imageAdditional={m4a}
                    advantagesTitle={'Стойкость и долговечность'}
                    advantages={[
                        'Высокая температурная устойчивость.',
                        'Большой предел прочности.',
                        'Устойчивость к химическому воздействию и ударам.',
                        'Без летучих органический соединений.',
                        'Устойчивость к коррозии и повреждениям.',
                    ]}
                    link={'/protection'}
                />
                <Module
                    type={'default'}
                    title={'Подрядные услуги'}
                    imageMain={m5m}
                    imageAdditional={m5a}
                    advantagesTitle={'Широкий спектр услуг'}
                    advantages={[
                        'Вся документация и лицензии.',
                        'Демонтаж зданий, сооружений, построек, в т.ч. вывоз мусора.',
                        'Землянные, такелажные, погрузо-разгрузочные работы',
                        'Перевозка негабаритных грузов, а также опасных грузов 1 класса.',
                        'Снос зданий.',
                        'Планировка участков.',
                        'Услуги асфальтоукладчиков для обычных и федеральных трасс.',
                    ]}
                    link={'/complex'}
                />
                <MainMap/>
                <Footer/>
            </Background>
        </>
    );
};

export default Main;