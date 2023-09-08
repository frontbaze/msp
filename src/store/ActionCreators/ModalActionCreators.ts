import {AppDispatch} from "../store";
import {modalSlice} from "../slices/ModalSlice";

export const openOfferModal = (service: string) => (dispatch: AppDispatch) => {
        dispatch(modalSlice.actions.openOfferModal(service))
}
export const openCallModal = (service: string) => (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.openCallModal(service))
}
export const closeCallModal = () => (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.closeCallModal())
}
export const closeOfferModal = () => (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.closeOfferModal())
}