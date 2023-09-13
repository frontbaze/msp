import React, { memo, useCallback, useEffect, useState } from 'react';
import classes from '../../styles/Price/PriceSidebarItem.module.scss';
import { ICatalogCategory } from '../../models/BaseItems';
import { Link } from 'react-scroll';

interface SidebarItemProps {
	item: ICatalogCategory;
	onItemSelect: () => void;
	selectedItem: {};
}

const PriceSidebarItem = memo(({ item, onItemSelect, selectedItem }: SidebarItemProps) => {
	const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
	const handleClick = () => {
		onItemSelect();
	};

	const changeOffset = useCallback(() => {
		let offset = -50;
		if (clientWidth <= 550) {
			return offset = -270;
		} else {
			return offset;
		}
	}, [clientWidth]);
	useEffect(() => {
		const handleResize = () => {
			setClientWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<Link
			offset={changeOffset()}
			onClick={handleClick}
			to={String(item.id)}
			className={item === selectedItem ? classes['active'] : classes['itemLink']}
		>
			{item.title}
		</Link>
	);
});

export default PriceSidebarItem;
