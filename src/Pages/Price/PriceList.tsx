import React from 'react';
import PriceCatalog from './PriceCatalog';
import PriceSidebar from './PriceSidebar';
import clasess from '../../styles/Price/PriceList.module.scss';
import StickyBox from 'react-sticky-box';

const PriceList = () => {
	return (
		<div className={clasess['PriceList']}>
			<StickyBox offsetTop={40} offsetBottom={50}>
				<PriceSidebar />
			</StickyBox>
			<PriceCatalog />
		</div>
	);
};

export default PriceList;
