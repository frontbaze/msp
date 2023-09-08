import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory, IVehicle, IVehicles} from "../../models/BaseItems";


interface VehicleState {
    loading: boolean;
    error: boolean;
    success: boolean;
    page: number;
    pages: number;
    limit: number;
    categories: ICategory[];
    vehicles: IVehicles;
    currentCategory: ICategory;
    vehicle: IVehicle
}

const initialState: VehicleState = {
    loading: false,
    error: false,
    success: false,
    categories: [],
    vehicles: {count: 0, rows: []},
    currentCategory: {id: 0, name: '', img: ''},
    page: 1,
    pages: 1,
    limit: 10,
    vehicle: {
        categoryId: 0, createdAt: '', description: '', id: 0, image: '',
        name: '', price: 0, updatedAt: '', vehicleCategoryId: 0
    }
}

export const vehicleSlice = createSlice({
        name: 'vehicle',
        initialState,
        reducers: {
            loading(state) {
                state.loading = true
                state.error = false
            },
            error(state) {
                state.loading = false
                state.error = true
            },
            success(state) {
                state.loading = false
                state.success = true
            },
            fetchingCategories(state){
                state.loading = true
            },
            fetchingCategoriesSuccess(state, action: PayloadAction<ICategory[]>){
                state.loading = false
                state.categories = action.payload
            },
            setCurrentCategory(state, action: PayloadAction<ICategory>) {
                state.loading = false
                state.currentCategory = action.payload
            },
            setDefaultCategory(state) {
                state.loading = false
                state.currentCategory = {id: 0, name: '', img: ''}
            },
            fetchingVehicleSuccess(state, action: PayloadAction<IVehicles>) {
                state.loading = false
                state.vehicles = action.payload
            },
            fetchingOneVehicleSuccess(state, action: PayloadAction<IVehicle>) {
                state.loading = false
                state.vehicle = action.payload
            },
            setPages(state, action: PayloadAction<number>){
                state.pages = Math.floor(action.payload / state.limit + 1)
            },
            setPage(state, action: PayloadAction<number>){
                state.page = action.payload
            },
        }
    }
)
export default vehicleSlice.reducer