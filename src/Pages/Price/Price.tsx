import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Background from '../../Components/Background';
import Navbar from '../../Components/Navbar';
import PageIntro from '../../Components/PageIntro';
import Layout from '../../Components/Layout';
import Footer from '../../Components/Footer';
import { FaCog, FaRubleSign } from 'react-icons/fa';
import { AiFillSignal } from 'react-icons/ai';
import image from '../../assets/modules/m2m.png';
import sample from '../../assets/videos/1.mp4';
import PriceList from './PriceList';

const Price = () => {
	useDocumentTitle('МСП - Прайс-лист');
	return (
		<Background>
			<Navbar />
			<PageIntro
				video={sample}
				title={'Прайс-лист'}
				image={image}
				dataset={[
					{
						title: 'Богатый опыт в тяжелых и масштабных проектах',
						text: 'Наш опыт позволяет выполнить нам любой по сложности и масштабам проект вовремя и с отличительным качеством.',
						icon: <AiFillSignal />,
					},
					{
						title: 'Возможность частичной оплаты',
						text: 'Островки платежей при подтверждении платежеспособности контрагента. Все виды оплаты: тендер, 123 ФЗ, 275 ФЗ, ОФК счет, ОБС счет, спец. счет.',
						icon: <FaRubleSign />,
					},
					{
						title: 'Гибкость в подборе и выполнении услуг',
						text: 'Изготовление по чертежам заказчика, а также изготовление чертежей.',
						icon: <FaCog />,
					},
				]}
			/>
			<Layout>
				<PriceList />
			</Layout>
			<Footer />
		</Background>
	);
};

export default Price;
