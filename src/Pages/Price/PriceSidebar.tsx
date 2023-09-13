import React, { useEffect, useMemo, useState } from 'react';
import PriceSidebarItem from './PriceSidebarItem';
import classes from '../../styles/Price/PriceSidebar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCatalogCategories } from '../../store/ActionCreators/PriceActionCreators';

const PriceSidebar = () => {
	const dispatch = useAppDispatch();
	const { catalogCategories } = useAppSelector((state) => state.priceReducer);
	const [selectedItem, setSelectedItem] = useState({});

	useEffect(() => {
		dispatch(fetchCatalogCategories());
	}, [dispatch]);

	const handleSelect = (item: {}) => {
		setSelectedItem(item);
	};

	const itemsList = useMemo(
		() =>
			catalogCategories.map((item) => (
				<PriceSidebarItem
					key={item.id}
					onItemSelect={() => handleSelect(item)}
					selectedItem={selectedItem}
					item={item}
				/>
			)),
		[catalogCategories, selectedItem]
	);
	return (
		<div className={classes['PriceSidebar']}>
			<div className={classes['item']}>{itemsList}</div>
		</div>
	);
};

export default PriceSidebar;
