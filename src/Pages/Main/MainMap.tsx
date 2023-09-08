import React from 'react';
import classes from '../../styles/../styles/Main/MainMap.module.scss'
import {Map, Placemark, YMaps, } from "react-yandex-maps";

const MainMap = () => {
    return (
        <div className={classes['MainMap']}>
            <YMaps>
                <Map defaultState={{ center: [43.104261, 131.900595], zoom: 14.5 }}>
                    <Placemark
                        geometry={[43.104261, 131.900595]}
                    />

                </Map>
            </YMaps>
        </div>
    );
};

export default MainMap;