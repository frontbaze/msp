import React, { useEffect } from 'react';
import classes from '../../styles/Price/PriceCatalog.module.scss';
import PriceCatalogItem from './PriceCatalogItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategories } from '../../store/ActionCreators/PriceActionCreators';

const PriceCatalog = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	const { catalogItems } = useAppSelector((state) => state.priceReducer);

	return (
		<div className={classes['PriceCatalog']}>
			{catalogItems.map((item) => (
				<PriceCatalogItem key={item.id} title={item.title} img={item.img} id={item.id} />
			))}
		</div>
	);
};

export default PriceCatalog;
