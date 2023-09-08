import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/UserSlice'
import vehicleReducer from './slices/VehicleSlice'
import modalReducer from './slices/ModalSlice'
import priceReducer from './slices/PriceSlice'

const rootReducer = combineReducers({
    userReducer, vehicleReducer, modalReducer, priceReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']