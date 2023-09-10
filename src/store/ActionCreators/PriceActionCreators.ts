import { AppDispatch } from '../store';
import { $authHost, $host } from '../../hof/http';
import imageCompression from 'browser-image-compression';
import { ICatalogCategory, ICatalogProduct } from '../../models/BaseItems';
import { priceSlice } from '../slices/PriceSlice';

export const createCatalogCategory = (category: string, image: FileList) => async (dispatch: AppDispatch) => {
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

export const createCatalogProduct = (category: ICatalogCategory, name: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const data = new FormData();
		data.append('name', name);
		data.append('categoryId', category.id.toString());
		await $authHost.post('api/vehicle', data);
		dispatch(priceSlice.actions.success());
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};

export const fetchCatalogCategories = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $host.get('api/category');
		dispatch(
			priceSlice.actions.fetchingCatalogCategoriesSuccess([
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

export const fetchCatalogProducts =
	(category: ICatalogCategory, page: number, limit: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(priceSlice.actions.loading());
			const { data } = await $host.get('api/vehicle', { params: { categoryId: category.id, page, limit } });
			dispatch(
				priceSlice.actions.fetchingCatalogProductsSuccess([
					{ id: 7, categoryId: 1, title: 'Сталь листовая г/к' },
					{ id: 8, categoryId: 1, title: 'Сталь листовая г/к' },
					{ id: 9, categoryId: 1, title: 'Сталь листовая г/к' },
					{ id: 10, categoryId: 2, title: 'Нихром' },
					{ id: 11, categoryId: 2, title: 'Победит' },
					{ id: 12, categoryId: 2, title: 'Латунь' },
				])
			);
			dispatch(priceSlice.actions.setPages(data.count));
		} catch (e) {
			dispatch(priceSlice.actions.error());
		}
	};
export const setCurrentCatalogCategory = (category: ICatalogCategory) => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.loading());
	dispatch(priceSlice.actions.setCurrentCatalogCategory(category));
	dispatch(priceSlice.actions.success());
};
export const setDefaultCatalogCategory = () => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.loading());
	dispatch(priceSlice.actions.setDefaultCatalogCategory());
	dispatch(priceSlice.actions.success());
};
export const deleteCatalogCategory = (category: ICatalogCategory) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $authHost({ method: 'DELETE', url: `api/category/${category.id}` });
		dispatch(priceSlice.actions.setCurrentCatalogCategory(category));
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};

export const deleteCatalogProduct = (product: ICatalogProduct) => async (dispatch: AppDispatch) => {
	try {
		dispatch(priceSlice.actions.loading());
		const { data } = await $authHost({ method: 'DELETE', url: `api/vehicle/${product.id}` });
		dispatch(priceSlice.actions.success());
	} catch (e) {
		dispatch(priceSlice.actions.error());
	}
};

export const setPage = (page: number) => (dispatch: AppDispatch) => {
	dispatch(priceSlice.actions.setPage(page));
};
