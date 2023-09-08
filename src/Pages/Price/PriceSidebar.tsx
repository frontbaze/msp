import React, { useEffect, useMemo, useState } from 'react';
import PriceSidebarItem from './PriceSidebarItem';
import classes from '../../styles/Price/PriceSidebar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategories } from '../../store/ActionCreators/PriceActionCreators';

const PriceSidebar = () => {
	const dispatch = useAppDispatch();
	const { catalogItems } = useAppSelector((state) => state.priceReducer);
	const [itemSelected, setItemSelected] = useState({});

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const itemsList = useMemo(
		() => catalogItems.map((item) => <PriceSidebarItem key={item.id} item={item} />),
		[catalogItems]
	);
	return (
		<div className={classes['PriceSidebar']}>
			<div className={classes['item']}>{itemsList}</div>
		</div>
	);
};

export default PriceSidebar;
