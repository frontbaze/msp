import React, {useEffect} from 'react';
import classes from '../../styles/Vehicle/Categories.module.scss'
import {
    fetchCategories,
    setCurrentCategory,
} from "../../store/ActionCreators/VehicleActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { motion } from 'framer-motion';
import {useDocumentTitle} from "../../hooks/useDocumentTitle";

const Categories = () => {
    const dispatch = useAppDispatch()
    const {categories} = useAppSelector(state => state.vehicleReducer)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    useDocumentTitle('МСП - Спецтехника')
    return (
        <div className={classes['Categories']}>
            {categories.map(i =>
                <motion.div className={classes['Categories__item']} key={i.id} onClick={() => dispatch(setCurrentCategory(i))}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                >
                    <div className={classes['Categories__item-image']} style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${i.img})`}}>
                    </div>
                    <div className={classes['Categories__item-name']}>
                        {i.name}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Categories;