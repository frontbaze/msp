import { AppDispatch } from '../store';
import { $authHost, $host } from '../../hof/http';
import imageCompression from 'browser-image-compression';
import { ICategory, IVehicle } from '../../models/BaseItems';
import { priceSlice } from '../slices/PriceSlice';

export const createCategory = (category: string, image: FileList) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const minImage = await imageCompression(image[0], { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
		const data = new FormData();
		data.append('name', category);
		data.append('img', minImage);
		await $authHost.post('api/category', data);
		dispatch(priceSlice.actions.success());
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const fetchCategories = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $host.get('api/category');
		dispatch(
			priceSlice.actions.fetchingCategoriesSuccess([
				{ id: 1, title: 'Категория', img: 'Картинка' },
				{ id: 2, title: 'Категория', img: 'Картинка' },
				{ id: 3, title: 'Категория', img: 'Картинка' },
				{ id: 4, title: 'Категория', img: 'Картинка' },
				{ id: 5, title: 'Сталь', img: 'Картинка' },
				{ id: 6, title: 'Сплавы', img: 'Картинка' },
			])
		);
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const fetchProductItems = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $host.get('api/category');
		dispatch(
			priceSlice.actions.fetchingCatalogProductItemsSuccess([
				{ id: 1, categoryId: 1, title: 'Сталь листовая г/к' },
				{ id: 2, categoryId: 1, title: 'Сталь листовая г/к' },
				{ id: 3, categoryId: 1, title: 'Сталь листовая г/к' },
				{ id: 4, categoryId: 2, title: 'Нихром' },
				{ id: 5, categoryId: 2, title: 'Победит' },
				{ id: 6, categoryId: 2, title: 'Латунь' },
			])
		);
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const setCurrentCategory = (category: ICategory) => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.loading());
	dispatch(priceSlice.actions.setCurrentCategory(category));
	dispatch(priceSlice.actions.success());
};
export const setDefaultCategory = () => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.loading());
	dispatch(priceSlice.actions.setDefaultCategory());
	dispatch(priceSlice.actions.success());
};
export const deleteCategory = (category: ICategory) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $authHost({ method: 'DELETE', url: `api/category/${category.id}` });
		dispatch(priceSlice.actions.setCurrentCategory(category));
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const createVehicle =
	(category: ICategory, name: string, description: string, images: FileList) => async (dispatch: AppDispatch) => {
		try {
			dispatch(priceSlice.actions.loading());
			const data = new FormData();
			data.append('name', name);
			data.append('description', description);
			data.append('categoryId', category.id.toString());
			let compressedImages = [];
			for (let i = 0; i < images.length; i++) {
				let c = await imageCompression(images[i], { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
				compressedImages.push(c);
			}
			Array.from(compressedImages).forEach((i) => {
				data.append('images', i);
			});
			data.append('image', compressedImages[0]);
			await $authHost.post('api/vehicle', data);
			dispatch(priceSlice.actions.success());
		} catch (e) {
			dispatch(priceSlice.actions.error());
		}
	};
export const fetchVehicles = (category: ICategory, page: number, limit: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $host.get('api/vehicle', { params: { categoryId: category.id, page, limit } });
		dispatch(priceSlice.actions.fetchingVehicleSuccess(data));
		dispatch(priceSlice.actions.setPages(data.count));
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const deleteVehicle = (vehicle: IVehicle) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $authHost({ method: 'DELETE', url: `api/vehicle/${vehicle.id}` });
		dispatch(priceSlice.actions.success());
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};
export const fetchOneVehicle = (id: string | undefined) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $host.get(`api/vehicle/${id}`);
		dispatch(priceSlice.actions.fetchingOneVehicleSuccess(data));
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};

export const setPage = (page: number) => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.setPage(page));
};
