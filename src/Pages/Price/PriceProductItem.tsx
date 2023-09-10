import React from 'react';
import classes from '../../styles/Price/PriceProductItem.module.scss';
import UIButton from '../../UIKit/UIButton';
import { openCallModal, openOfferModal } from '../../store/ActionCreators/ModalActionCreators';
import { useAppDispatch } from '../../hooks/redux';

interface PriceProductItemProps {
    title: string;
}

const PriceProductItem = ({ title }: PriceProductItemProps) => {
	const dispatch = useAppDispatch();
	return (
		<div className={classes['PriceProductItem']}>
			<div className={classes['title']}>{title}</div>
			<div className={classes['btns']}>
				<UIButton onClick={() => dispatch(openOfferModal(`Купить: ${title}`))} type={'outline'}>
					Заказать
				</UIButton>
				<UIButton onClick={() => dispatch(openCallModal(`Купить: ${title}`))} type={'text'}>
					Обратный звонок
				</UIButton>
			</div>
		</div>
	);
};

export default PriceProductItem;
