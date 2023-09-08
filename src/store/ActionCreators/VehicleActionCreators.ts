import {AppDispatch} from "../store";
import {vehicleSlice} from "../slices/VehicleSlice";
import {$authHost, $host} from "../../hof/http";
import imageCompression from 'browser-image-compression';
import {ICategory, IVehicle} from "../../models/BaseItems";

export const createCategory = (category: string, image: FileList) => async(dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const minImage = await imageCompression(image[0], {maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true})
        const data = new FormData()
        data.append('name', category)
        data.append('img', minImage)
        await $authHost.post('api/category', data)
        dispatch(vehicleSlice.actions.success())
    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}
export const fetchCategories = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const {data} = await $host.get('api/category')
        dispatch(vehicleSlice.actions.fetchingCategoriesSuccess(data))
    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}
export const setCurrentCategory = (category: ICategory) => (dispatch: AppDispatch) => {
    dispatch(vehicleSlice.actions.loading())
    dispatch(vehicleSlice.actions.setCurrentCategory(category))
    dispatch(vehicleSlice.actions.success())
}
export const setDefaultCategory = () => (dispatch: AppDispatch) => {
    dispatch(vehicleSlice.actions.loading())
    dispatch(vehicleSlice.actions.setDefaultCategory())
    dispatch(vehicleSlice.actions.success())
}
export const deleteCategory = (category: ICategory) => async (dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const {data} = await $authHost({method:'DELETE', url:`api/category/${category.id}`});
        dispatch(vehicleSlice.actions.setCurrentCategory(category))
    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}
export const createVehicle = (category: ICategory, name: string, description: string, images: FileList) =>
    async(dispatch: AppDispatch) => {
        try {
            dispatch(vehicleSlice.actions.loading())
            const data = new FormData()
            data.append('name', name)
            data.append('description', description)
            data.append('categoryId', category.id.toString())
            let compressedImages = []
            for (let i = 0; i < images.length; i++){
                let c = await imageCompression(images[i],
                    {maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true}
                )
                compressedImages.push(c)
            }
            Array.from(compressedImages).forEach(i => {
                data.append('images', i);
            });
            data.append('image', compressedImages[0])
            await $authHost.post('api/vehicle', data)
            dispatch(vehicleSlice.actions.success())
        } catch (e) {
            dispatch(vehicleSlice.actions.error())
        }
    }
export const fetchVehicles = (category: ICategory, page: number, limit: number) => async(dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const {data} = await $host.get('api/vehicle', {params: {categoryId: category.id, page, limit}})
        dispatch(vehicleSlice.actions.fetchingVehicleSuccess(data))
        dispatch(vehicleSlice.actions.setPages(data.count))

    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}
export const deleteVehicle = (vehicle: IVehicle) => async (dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const {data} = await $authHost({method:'DELETE', url:`api/vehicle/${vehicle.id}`});
        dispatch(vehicleSlice.actions.success())
    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}
export const fetchOneVehicle = (id: string | undefined) => async(dispatch: AppDispatch) => {
    try {
        dispatch(vehicleSlice.actions.loading())
        const {data} = await $host.get(`api/vehicle/${id}`)
        dispatch(vehicleSlice.actions.fetchingOneVehicleSuccess(data))
    } catch (e) {
        dispatch(vehicleSlice.actions.error())
    }
}

export const setPage = (page: number) => (dispatch: AppDispatch) => {
    dispatch(vehicleSlice.actions.setPage(page))
}


