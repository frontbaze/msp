import React, { useEffect } from 'react';
import classes from '../../styles/Price/PriceCatalog.module.scss';
import PriceCatalogItem from './PriceCatalogItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCatalogCategories } from '../../store/ActionCreators/PriceActionCreators';
import { Element } from 'react-scroll';

const PriceCatalog = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCatalogCategories());
	}, [dispatch]);
	const { catalogCategories } = useAppSelector((state) => state.priceReducer);

	return (
		<div className={classes['PriceCatalog']}>
			{catalogCategories.map((item) => (
				<Element key={item.id} name={String(item.id)}>
					<PriceCatalogItem title={item.title} img={item.img} id={item.id} />
				</Element>
			))}
		</div>
	);
};

export default PriceCatalog;
