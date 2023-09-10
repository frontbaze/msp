import React, { memo } from 'react';
import classes from '../../styles/Price/PriceSidebarItem.module.scss';
import { ICatalogCategory } from '../../models/BaseItems';
import { Link } from 'react-scroll';

interface SidebarItemProps {
	item: ICatalogCategory;
	onItemSelect: () => void;
	selectedItem: {};
}

const PriceSidebarItem = memo(({ item, onItemSelect, selectedItem }: SidebarItemProps) => {
	const handleClick = () => {
		onItemSelect();
	};
	return (
		<Link
			offset={-60}
			onClick={handleClick}
			to={String(item.id)}
			className={item === selectedItem ? classes['active'] : classes['itemLink']}
		>
			{item.title}
		</Link>
	);
});

export default PriceSidebarItem;
