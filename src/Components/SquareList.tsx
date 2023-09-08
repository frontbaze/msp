import { motion } from 'framer-motion';
import React from 'react';
import classes from '../styles/Components/SquareList.module.scss'
import {openOfferModal} from "../store/ActionCreators/ModalActionCreators";
import {useAppDispatch} from "../hooks/redux";
import {useNavigate} from "react-router-dom";

interface IDataItem {
    title: string,
    img: string
}

const SquareList = ({data, type, link}: {data: IDataItem[], type: 'modal' | 'navigate', link: string }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className={classes['SquareList']}>
            {data.map((i, index) =>
                <motion.div className={classes['SquareList__item']} key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {type === 'modal' ? dispatch(openOfferModal(i.title)) : navigate(link)} }
                >
                    <div className={classes['SquareList__item-image']} style={{backgroundImage: `url(${i.img})`}}/>
                    <p className={classes['SquareList__item-text']}>{i.title}</p>
                </motion.div>
            )}
        </div>
    );
};

export default SquareList;