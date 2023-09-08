import React from 'react';
import classes from '../../styles/Main/Module.module.scss'
import Layout from "../../Components/Layout";
import UIButton from "../../UIKit/UIButton";
import {AnimatePresence, motion} from 'framer-motion';
import {moduleImageAddAnimation, moduleImageMainAnimation, moduleItemAnimation,} from "../../animations/animations";
import {openCallModal} from "../../store/ActionCreators/ModalActionCreators";
import {useAppDispatch} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";

interface IModule {
    type: 'default' | 'reversed'
    title: string
    imageAdditional: string
    imageMain: string
    advantagesTitle: string
    advantages: string[]
    link: string
}

const Module = (props: IModule) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <Layout>
            <div className={`${classes['Module']} ${classes[props.type]}`}>
                <div className={classes['Module__content']}>
                    <div className={classes['Module__content-image']}>
                        <div className={classes['Module__content-image-title']}>{props.title}</div>
                        <AnimatePresence>
                            <motion.div className={classes['Module__content-image-img']}
                                        variants={moduleImageMainAnimation}
                                        initial={'hidden'}
                                        whileInView={'visible'}
                                        viewport={{once: true}}
                            >
                                <img src={props.imageMain} alt=""/>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={classes['Module__content-buttons']}>
                        <UIButton type={'outline'} onClick={() => navigate(props.link)} >Каталог</UIButton>
                        <UIButton type={'text'} onClick={() => dispatch(openCallModal(props.title))}>Обратный звонок</UIButton>
                    </div>
                </div>
                <div className={classes['Module__info']}>
                    <AnimatePresence>
                        <motion.img src={props.imageAdditional} alt=""
                                    variants={moduleImageAddAnimation}
                                    initial={'hidden'}
                                    whileInView={'visible'}
                                    viewport={{once: true}}
                        />
                    </AnimatePresence>
                    <p className={classes['Module__info-title']}>{props.advantagesTitle}</p>
                    <AnimatePresence>
                        <div className={classes['Module__info-items']}>
                            {props.advantages.map((i, idx) =>
                                <motion.p key={`${props.title}-${idx}`} variants={moduleItemAnimation} initial={'default'} whileInView={'scaled'} custom={idx} viewport={{once: true}}>
                                    - {i}
                                </motion.p>
                            )}
                        </div>
                    </AnimatePresence>

                </div>
            </div>
        </Layout>
    );
};

export default Module;