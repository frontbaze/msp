import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICatalogCategory, ICatalogProduct} from '../../models/BaseItems';

interface PriceState {
	loading: boolean;
	error: boolean;
	success: boolean;
	page: number;
	pages: number;
	limit: number;
	catalogCategories: ICatalogCategory[];
	catalogProducts: ICatalogProduct[];
	currentCatalogCategory: ICatalogCategory;
}

const initialState: PriceState = {
	loading: false,
	error: false,
	success: false,
	catalogCategories: [],
	catalogProducts: [],
	currentCatalogCategory: { id: 0, title: '', img: '' },
	page: 1,
	pages: 1,
	limit: 10,
};

export const priceSlice = createSlice({
	name: 'price',
	initialState,
	reducers: {
		loading(state) {
			state.loading = true;
			state.error = false;
		},
		error(state) {
			state.loading = false;
			state.error = true;
		},
		success(state) {
			state.loading = false;
			state.success = true;
		},
		fetchingCatalogCategories(state) {
			state.loading = true;
		},
		fetchingCatalogCategoriesSuccess(state, action: PayloadAction<ICatalogCategory[]>) {
			state.loading = false;
			state.catalogCategories = action.payload;
		},
		fetchingCatalogProductsSuccess(state, action: PayloadAction<ICatalogProduct[]>) {
			state.loading = false;
			state.catalogProducts = action.payload;
		},
		setCurrentCatalogCategory(state, action: PayloadAction<ICatalogCategory>) {
			state.loading = false;
			state.currentCatalogCategory = action.payload;
		},
		setDefaultCatalogCategory(state) {
			state.loading = false;
			state.currentCatalogCategory = { id: 0, title: '', img: '' };
		},
		fetchingCatalogProductSuccess(state, action: PayloadAction<ICatalogProduct[]>) {
			state.loading = false;
			state.catalogProducts = action.payload;
		},
		setPages(state, action: PayloadAction<number>) {
			state.pages = Math.floor(action.payload / state.limit + 1);
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
});
export default priceSlice.reducer;
