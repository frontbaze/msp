import React from 'react';
import PriceCatalog from './PriceCatalog';
import PriceSidebar from './PriceSidebar';
import clasess from '../../styles/Price/PriceList.module.scss';

const PriceList = () => {
	return (
		<div className={clasess['PriceList']}>
			<PriceSidebar />
			<PriceCatalog />
		</div>
	);
};

export default PriceList;
