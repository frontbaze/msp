import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import {IToken} from "../../models/IToken";
import {IReview} from "../../models/BaseItems";

interface UserState {
    loading: boolean;
    error: boolean | string
    user: string;
    checkError: boolean;
    reviews: IReview[]
    postOfferSuccess: boolean,
    postOfferError: boolean
}

const initialState: UserState = {
    loading: false,
    error: false,
    user: '',
    checkError: false,
    reviews: [],
    postOfferSuccess: false,
    postOfferError: false,
}

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            //auth
            loginLoading(state) {
                state.error = false
                state.loading = true
            },
            loginError(state) {
                state.loading = false
                state.error = true
            },
            registerLoading(state) {
                state.error = false
                state.loading = true
            },
            checkError(state) {
                state.checkError = true
                state.loading = false
            },
            registerError(state) {
                state.loading = false
                state.error = true
            },
            success(state, action: PayloadAction<any>) {
                const token: IToken = jwt_decode(action.payload.token)
                state.user = token.role
                localStorage.setItem('token', action.payload.token)
                state.error = false
                state.loading = false
            },
            check(state) {
                const token  = localStorage.getItem('token')
                if (token) {
                    const decodedToken: IToken = jwt_decode(token)
                    state.user = decodedToken.role
                } else {
                    state.checkError = true
                }
                state.loading = false

            },
            //reviews
            reviewsLoading(state) {
                state.loading = true
                state.error = false
            },
            reviewPostingSuccess(state){
                state.loading = false
                state.error = false
            },
            reviewsError(state){
                state.loading = false
                state.error = true
            },
            reviewsFetchingSuccess(state, action: PayloadAction<IReview[]>){
                state.loading = false
                state.reviews = action.payload
            },
            postOfferLoading(state){
                state.loading = true
                state.postOfferSuccess = false
                state.postOfferError = false
            },
            postOfferSuccess(state){
                state.loading = false
                state.postOfferSuccess = true
                state.postOfferError = false
            },
            postOfferError(state){
                state.loading = false
                state.postOfferSuccess = false
                state.postOfferError = true
            },
        }
    }
)
export default userSlice.reducer