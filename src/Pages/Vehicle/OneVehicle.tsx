import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Background from "../../Components/Background";
import Layout from "../../Components/Layout";
import classes from '../../styles/Vehicle/OneVehicle.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchOneVehicle} from "../../store/ActionCreators/VehicleActionCreators";
import UIButton from "../../UIKit/UIButton";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {openCallModal, openOfferModal} from "../../store/ActionCreators/ModalActionCreators";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import MobileNavBar from "../../Components/MobileNavBar";

const OneVehicle = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {vehicle} = useAppSelector(state => state.vehicleReducer)
    const navigate = useNavigate()
    const [currentImage, setCurrentImage] = useState<string>('')

    useEffect(() => {
        dispatch(fetchOneVehicle(id))
    }, [])

    useEffect(() => {
        setCurrentImage(vehicle.image)
    }, [vehicle]);

    useDocumentTitle(`МСП - ${vehicle.name}`)

    return (
        <Background>
            <Navbar/>
            <MobileNavBar title={vehicle.name}/>
            <Layout>
                <div className={classes['OneVehicle']}>
                    <div className={classes['OneVehicle-title']}>
                        {vehicle.name}
                    </div>
                    <div  className={classes['OneVehicle__item']}>
                        <div className={classes['OneVehicle__item-graphics']}>
                            <div className={classes['OneVehicle__item-graphics-image']}
                                 style={{backgroundImage:`url(${process.env.REACT_APP_API_URL}${currentImage})`}}
                            />
                            <div className={classes['OneVehicle__item-graphics-images']}>
                                {vehicle.images && vehicle.images.map((i: any, index) =>
                                    <div className={classes['OneVehicle__item-graphics-images-item']} key={index}
                                         onClick={() => setCurrentImage(i.img)} style={{backgroundImage:`url(${process.env.REACT_APP_API_URL}${i.img})`}}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={classes['OneVehicle__item-info']}>
                            <p style={{whiteSpace: 'pre-line'}} >
                                {vehicle.description}
                            </p>
                            <div className={classes['OneVehicle__item-info-buttons']}>
                                <UIButton type={'outline'} onClick={() => dispatch(openOfferModal('Аренда - ' + vehicle.name))}>Заказать</UIButton>
                                <UIButton type={'text'} onClick={() => dispatch(openCallModal('Аренда -  ' + vehicle.name))}>Обратный звонок</UIButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default OneVehicle;