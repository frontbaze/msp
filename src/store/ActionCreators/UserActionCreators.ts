import {AppDispatch} from "../store";
import {userSlice} from "../slices/UserSlice";
import {$authHost, $host} from "../../hof/http";
import emailjs from "@emailjs/browser";

export const registration = (number: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.registerLoading())
        const {data} = await $host.post('api/user/registration', {number, password})
        dispatch(userSlice.actions.success(data))
    } catch (e) {
        dispatch(userSlice.actions.registerError())
    }
}
export const login = (number: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginLoading())
        const {data} = await $host.post('api/user/login', {number, password})
        dispatch(userSlice.actions.success(data))
    } catch (e) {
        dispatch(userSlice.actions.loginError())
    }
}
export const check = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginLoading())
        dispatch(userSlice.actions.check())
    } catch (e) {
        dispatch(userSlice.actions.checkError())
    }
}
export const createReview = (message: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.reviewsLoading())
        const {data} = await $host.post('api/review', {message})
        dispatch(userSlice.actions.reviewPostingSuccess())
    } catch (e) {
        dispatch(userSlice.actions.reviewsError())
    }
}
export const fetchReviews = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.reviewsLoading())
        const {data} = await $host.get('api/review',)
        dispatch(userSlice.actions.reviewsFetchingSuccess(data))
    } catch (e) {
        dispatch(userSlice.actions.reviewsError())
    }
}
export const deleteReview = (id: number) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.reviewsLoading())
        const {data} = await $authHost({method:'DELETE', url:`api/review/${id}`});
        dispatch(userSlice.actions.reviewPostingSuccess())
    } catch (e) {
        dispatch(userSlice.actions.reviewsError())
    }
}
export const postOffer = (message: any) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.postOfferLoading())
        await emailjs.send('service_ztlemqa', 'template_rbuqozo', message, 'PD4HKf7wpmauwI0oC')
        dispatch(userSlice.actions.postOfferSuccess())
    } catch (e) {
        console.log(e)
        dispatch(userSlice.actions.postOfferError())
    }
}