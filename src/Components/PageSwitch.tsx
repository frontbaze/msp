import React from 'react';
import classes from '../styles/Components/PageSwitch.module.scss'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setPage} from "../store/ActionCreators/VehicleActionCreators";

const PageSwitch = () => {
    const {pages, page} = useAppSelector(state => state.vehicleReducer)
    const dispatch = useAppDispatch()
    const statePages = []

    for (let i = 0; i < pages; i++){
        statePages.push(i + 1)
    }

    return (
        <div className={classes['PageSwitch']}>
            {statePages.map(i =>
                <div className={i === page ?
                    classes['PageSwitch__item'] + ' ' + classes['active']
                    :
                    classes['PageSwitch__item']}
                     key={i}
                     onClick={() => {dispatch(setPage(i))}}
                >
                    {i}
                </div>
            )}
        </div>
    );
};

export default PageSwitch;