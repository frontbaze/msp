import React, {useEffect, useRef, useState} from 'react';
import classes from '../../styles/Main/Score.module.scss'
import Layout from "../../Components/Layout";
import UIButton from "../../UIKit/UIButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from 'gsap';
import { motion } from 'framer-motion';
import {itemAnimation} from "../../animations/animations";
import {useAppDispatch} from "../../hooks/redux";
import {openCallModal} from "../../store/ActionCreators/ModalActionCreators";
import {useNavigate} from "react-router-dom";


const Score = () => {
    const navigate = useNavigate()
    const [partnersCounter, setPartnersCounter] = useState<number>(0)
    const [vehiclesCounter, setVehiclesCounter] = useState<number>(0)
    const [clientsCounter, setClientsCounter] = useState<number>(0)
    const dispatch = useAppDispatch()
    const visibleRef = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(visibleRef, {})
    const isVisible = !!entry?.isIntersecting

    useEffect(() => {
        let partners= {value: 0}
        let clients = {value: 0}
        let vehicles = {value: 0}
        gsap.to(partners, {
            value: 37, duration: 2,
            onUpdate: () => {
                setPartnersCounter(Math.round(partners.value))
            }
        })
        gsap.to(vehicles, {
            value: 6700, duration: 2,
            onUpdate: () => {
                setVehiclesCounter(Math.round(vehicles.value))
            }
        })
        gsap.to(clients, {
            value: 32000, duration: 2.5,
            onUpdate: () => {
                setClientsCounter(Math.round(clients.value))
            }
        })
    }, [isVisible])

    return (
        <Layout>
            <div className={classes['Score']}>
                <div className={classes['Score__table']} ref={visibleRef}>
                    <motion.div className={classes['Score__table-item']} viewport={{once: true}}
                                initial={'hidden'} whileInView={'visible'}
                                custom={5} variants={itemAnimation}
                    >
                        <div className={classes['Score__table-item-count']}>+{partnersCounter.toLocaleString('ru')}</div>
                        <div className={classes['Score__table-item-name']}>Партнеров</div>
                    </motion.div>
                    <motion.div className={classes['Score__table-item']} viewport={{once: true}}
                                initial={'hidden'} whileInView={'visible'} custom={6} variants={itemAnimation}
                    >
                        <div className={classes['Score__table-item-count']}>+{vehiclesCounter.toLocaleString('ru')}</div>
                        <div className={classes['Score__table-item-name']}>Ед. техники</div>
                    </motion.div>
                    <motion.div className={classes['Score__table-item']} viewport={{once: true}}
                                initial={'hidden'} whileInView={'visible'} custom={7} variants={itemAnimation}
                    >
                        <div className={classes['Score__table-item-count']}>+{clientsCounter.toLocaleString('ru')}</div>
                        <div className={classes['Score__table-item-name']}>Клиентов</div>
                    </motion.div>
                </div>
                <div className={classes['Score__buttons']}>
                    <UIButton onClick={() => navigate('/reviews')} type={'outline'}>Отзывы</UIButton>
                    <UIButton onClick={() => dispatch(openCallModal(''))} type={'text'}>Обратный звонок</UIButton>
                </div>
            </div>
        </Layout>
    );
};

export default Score;