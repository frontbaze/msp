import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/Price/PriceSidebarItem.module.scss';
import { ICatalogItem } from '../../models/BaseItems';


interface SidebarItemProps {
	item: ICatalogItem;
}

const PriceSidebarItem = memo(({ item }: SidebarItemProps) => {
	return (
		<Link to={`#`} className={classes['itemLink']}>
			{item.title}
		</Link>
	);
});

export default PriceSidebarItem;
