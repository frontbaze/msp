import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState{
    offer: boolean;
    call: boolean;
    selectedService: string;
}

const initialState: ModalState = {
    offer: false,
    call: false,
    selectedService: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openCallModal(state, action: PayloadAction<string>){
            state.call = true
            state.selectedService = action.payload
        },
        openOfferModal(state, action: PayloadAction<string>){
            state.offer = true
            state.selectedService = action.payload
        },
        closeCallModal(state){
            state.call = false
            state.selectedService = ''
        },
        closeOfferModal(state){
            state.offer = false
            state.selectedService = ''
        },

    }
})
export default modalSlice.reducer