import React, {useEffect} from 'react';
import Main from "./Pages/Main/Main";
import Vehicle from './Pages/Vehicle/Vehicle'
import './styles/index.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Buildings from "./Pages/Buildings/Buildings";
import Protection from "./Pages/Protection/Protection";
import Metal from "./Pages/Metal/Metal";
import Complex from "./Pages/Complex/Complex";
import Auth from "./Pages/Auth/Auth";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Admin from "./Pages/Admin/Admin";
import ComponentLoader from "./Components/ComponentLoader";
import OneVehicle from "./Pages/Vehicle/OneVehicle";
import ScrollToTop from "./hoc/ScrollTop";
import UIModal from "./UIKit/UIModal";
import Reviews from "./Pages/Reviews/Reviews";
import Contacts from "./Pages/Contacts/Contacts";
import {check} from "./store/ActionCreators/UserActionCreators";
import Materials from "./Pages/Materials/Materials";
import PriceList from './Pages/Price/Price';

const App = () => {
    const dispatch = useAppDispatch()
    const {offer, call} = useAppSelector(state => state.modalReducer)
    const {loading: userLoading} = useAppSelector(state => state.userReducer)
    const {loading: itemsLoading} = useAppSelector(state => state.vehicleReducer)

    useEffect(() => {
        dispatch(check())
    }, [])

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='price-list' element={<PriceList />} />
                    <Route path='vehicle' element={<Vehicle/>}/>
                    <Route path='vehicle/:id' element={<OneVehicle/>}/>
                    <Route path='buildings' element={<Buildings/>}/>
                    <Route path='protection' element={<Protection/>}/>
                    <Route path='complex' element={<Complex/>}/>
                    <Route path='metal' element={<Metal/>}/>
                    <Route path='auth' element={<Auth/>}/>
                    <Route path='admin' element={<Admin/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='materials' element={<Materials/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </BrowserRouter>
            {(userLoading || itemsLoading) && <ComponentLoader/>}
            {(call || offer) && <UIModal/>}
        </>
    );
};

export default App;