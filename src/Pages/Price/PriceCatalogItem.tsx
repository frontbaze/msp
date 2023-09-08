import React, { useEffect } from 'react';
import classes from '../../styles/Price/PriceCatalogItem.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductItems } from '../../store/ActionCreators/PriceActionCreators';
import PriceProductItem from './PriceProductItem';

interface PriceCatalogItemProps {
	title: string;
    img: string;
    id: number;
}

const PriceCatalogItem = ({ id, title, img }: PriceCatalogItemProps) => {
    const dispatch = useAppDispatch();
	const { catalogProductItems } = useAppSelector((state) => state.priceReducer);

	useEffect(() => {
		dispatch(fetchProductItems());
    }, [dispatch]);
    
    const categoryItems = catalogProductItems.filter(item => item.categoryId === id)
	return (
		<div className={classes['PriceCatalogItem']}>
			<div className={classes['title']}>{title}</div>
			<img className={classes['catalogImg']} src={img} alt='CatalogImage' />
			{categoryItems.map((item) => (
				<PriceProductItem key={item.id} title={item.title} />
			))}
		</div>
	);
};

export default PriceCatalogItem;
