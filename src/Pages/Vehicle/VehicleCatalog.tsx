import React, {useEffect} from 'react';
import classes from '../../styles/Vehicle/VehicleCatalog.module.scss'
import UIButton from "../../UIKit/UIButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchVehicles, setCurrentCategory, setPage} from "../../store/ActionCreators/VehicleActionCreators";
import {useNavigate} from "react-router-dom";
import PageSwitch from "../../Components/PageSwitch";
import {openCallModal, openOfferModal} from "../../store/ActionCreators/ModalActionCreators";

const VehicleCatalog = () => {
    const dispatch = useAppDispatch()
    const {vehicles, currentCategory, categories, limit, page, pages} = useAppSelector(state => state.vehicleReducer)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchVehicles(currentCategory, page, limit))
    }, [currentCategory, page])

    return (
        <>
            <div className={classes['SwitchCategory']}>
                {categories.map(i =>
                    <div onClick={() => {
                        dispatch(setCurrentCategory(i))
                        dispatch(setPage(1))
                    }}
                        className={i === currentCategory ? classes['SwitchCategory-item-active'] : classes['SwitchCategory-item']} key={i.id}>
                        {i.name}
                    </div>
                )}
            </div>
            <div className={classes['VehicleCatalog']}>
                {vehicles.rows.map(i =>
                    <div className={classes['VehicleCatalog__item']} onClick={() => navigate(`/vehicle/${i.id}`)} key={i.id}>
                        <div className={classes['VehicleCatalog__item-image']}
                             style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${i.image})`}}
                        />

                        <div className={classes['VehicleCatalog__item-info']}>
                            <div className={classes['VehicleCatalog__item-info-name']}>
                                {i.name}
                            </div>
                            <div className={classes['VehicleCatalog__item-info-description']}>
                                {i.description.length > 70 ? `${i.description.substring(0, 70)}...` : i.description}
                            </div>
                            <div className={classes['VehicleCatalog__item-info-buttons']}>
                                <UIButton onClick={() => dispatch(openOfferModal(`Аренда: ${i.name}`))} type={'outline'}>
                                    Заказать
                                </UIButton>
                                <UIButton onClick={() => dispatch(openCallModal(`Аренда: ${i.name}`))} type={'text'}>
                                    Обратный звонок
                                </UIButton>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {pages > 1 && <PageSwitch/>}
        </>
    );
};

export default VehicleCatalog;