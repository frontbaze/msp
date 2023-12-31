import React, { useEffect, useState } from 'react';
import Background from '../../Components/Background';
import Layout from '../../Components/Layout';
import classes from '../../styles/Admin/Admin.module.scss';
import Navbar from '../../Components/Navbar';
import UIButton from '../../UIKit/UIButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	createCategory,
	createVehicle,
	deleteCategory,
	deleteVehicle,
	fetchCategories,
	fetchVehicles,
	setCurrentCategory,
} from '../../store/ActionCreators/VehicleActionCreators';
import {
	createCatalogCategory,
	createCatalogProduct,
	deleteCatalogCategory,
	deleteCatalogProduct,
	fetchCatalogCategories,
	fetchCatalogProducts,
	setCurrentCatalogCategory,
} from '../../store/ActionCreators/PriceActionCreators';
import TextareaAutosize from 'react-textarea-autosize';
import Footer from '../../Components/Footer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const Admin = () => {
	const [creationCategory, setCreationCategory] = useState<boolean>(false);
	const [categoryImage, setCategoryImage] = useState<FileList | null>(null);

	const [vehicleCreation, setVehicleCreation] = useState<boolean>(false);
	const [vehicleImages, setVehicleImages] = useState<FileList | null>(null);
	const [vehicleName, setVehicleName] = useState<string>('');
	const [vehicleDescription, setVehicleDescription] = useState<string>('');

	const [creationCatalogCategory, setCreationCatalogCategory] = useState<boolean>(false);
	const [catalogCategoryImage, setCatalogCategoryImage] = useState<FileList | null>(null);
	const [catalogCategoryName, setCatalogCategoryName] = useState<string>('');
	const [creationCatalogProduct, setCreationCatalogProduct] = useState<boolean>(false);
	const [catalogProductName, setCatalogProductName] = useState<string>('');

	const [category, setCategory] = useState<string>('');
	const dispatch = useAppDispatch();
	const { categories, currentCategory, vehicles, limit, page } = useAppSelector((state) => state.vehicleReducer);
	const { catalogCategories, catalogProducts, currentCatalogCategory } = useAppSelector((state) => state.priceReducer);

	useDocumentTitle('МСП - Админ-панель');

	const createCategoryHandler = () => {
		if (categoryImage && category) {
			dispatch(createCategory(category, categoryImage)).then(() => dispatch(fetchCategories()));
			setCreationCategory(false);
			setCategoryImage(null);
			setCategory('');
		} else {
			alert('Заполните все поля !');
		}
	};

	const createVehicleHandler = () => {
		if (
			currentCategory.id !== 0 &&
			vehicleName &&
			vehicleDescription &&
			vehicleImages &&
			vehicleImages.length > 1
		) {
			dispatch(createVehicle(currentCategory, vehicleName, vehicleDescription, vehicleImages)).then(() =>
				dispatch(fetchVehicles(currentCategory, page, limit))
			);
			setVehicleCreation(false);
			setVehicleName('');
			setVehicleDescription('');
			setVehicleImages(null);
		} else {
			alert('Заполните все поля!');
		}
	};

	const createCatalogCategoryHandler = () => {
		if (catalogCategoryImage && catalogCategoryName) {
			dispatch(createCatalogCategory(catalogCategoryName, catalogCategoryImage)).then(() =>
				dispatch(fetchCatalogCategories())
			);
			setCreationCatalogCategory(false);
			setCatalogCategoryImage(null);
			setCatalogCategoryName('');
		} else {
			alert('Заполните все поля !');
		}
	};

	const createCatalogProductHandler = () => {
        if (
			currentCatalogCategory.id !== 0 && catalogProductName) {
			dispatch(createCatalogProduct(currentCatalogCategory, catalogProductName)).then(() =>
				dispatch(fetchCatalogProducts(currentCatalogCategory, page, limit))
			);
			setCreationCatalogProduct(false);
			setCatalogProductName('');
		} else {
			alert('Заполните все поля!');
		}
	};

	useEffect(() => {
		dispatch(fetchCategories());
        dispatch(fetchVehicles(currentCategory, page, limit));
        dispatch(fetchCatalogCategories())
        dispatch(fetchCatalogProducts(currentCatalogCategory, page, limit));
	}, [currentCategory]);

	return (
		<Background>
			<Navbar />
			<Layout>
				<div className={classes['Admin']}>
					<div className={classes['Admin__item']}>
						<div className={classes['Admin__item-title']}>Категории спецтехники</div>
						<hr />
						<div className={classes['Admin__item-categories']}>
							{categories.map((i) => (
								<div
									className={
										i.id === currentCategory.id
											? classes['Admin__item-categories-item-active']
											: classes['Admin__item-categories-item']
									}
									key={i.id}
									onClick={() => dispatch(setCurrentCategory(i))}
								>
									<div
										className={classes['Admin__item-categories-item-image']}
										style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}${i.img})` }}
									/>
									<p
										className={classes['Admin__item-categories-item-title']}
										style={{ marginRight: 50 }}
									>
										{i.name}
									</p>
									<UIButton
										type={'text'}
										onClick={() =>
											dispatch(deleteCategory(i)).then(() => dispatch(fetchCategories()))
										}
									>
										Удалить
									</UIButton>
								</div>
							))}
						</div>
						{creationCategory ? (
							<div
								className={classes['Admin__item-categories-form']}
								style={creationCategory && { flexDirection: 'column' }}
							>
								<div className={'UIInput'}>
									<input
										required
										value={category}
										onChange={(e) => setCategory(e.currentTarget.value)}
									/>
									<div className={'UIInput-placeholder'}>Категория</div>
								</div>
								<label className={classes['file']}>
									<input
										placeholder={'Добавить файл'}
										type='file'
										onChange={(e) => setCategoryImage(e.target.files)}
									/>
									<span className={classes['file-span']}>
										{categoryImage
											? categoryImage[0].name.length > 20
												? `${categoryImage[0].name.substring(0, 20)}...`
												: categoryImage[0].name
											: 'Добавить файл'}
									</span>
								</label>
								<UIButton type={'text-small'} onClick={() => createCategoryHandler()}>
									Добавить категорию
								</UIButton>
							</div>
						) : (
							<UIButton type={'outline'} onClick={() => setCreationCategory(true)}>
								Добавить Категорию
							</UIButton>
						)}
					</div>
					<div className={classes['Admin__item']}>
						<div className={classes['Admin__item-title']}>Каталог спецтехники</div>
						<hr />
						<div className={classes['Admin__item-categories']}>
							{vehicles.rows.map((i: any) => (
								<div
									className={
										i === currentCategory
											? classes['Admin__item-categories-item-active']
											: classes['Admin__item-categories-item']
									}
									key={i.id}
								>
									<div
										className={classes['Admin__item-categories-item-image']}
										style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}${i.image})` }}
									/>
									<p
										className={classes['Admin__item-categories-item-title']}
										style={{ marginRight: 50 }}
									>
										{i.name}
									</p>
									<UIButton
										type={'text'}
										onClick={() =>
											dispatch(deleteVehicle(i)).then(() =>
												dispatch(fetchVehicles(currentCategory, page, limit))
											)
										}
									>
										Удалить
									</UIButton>
								</div>
							))}
						</div>
						{vehicleCreation ? (
							<div className={classes['Admin__item-categories-form']} style={{ flexDirection: 'column' }}>
								<div className={'UIInput'}>
									<input
										required
										value={vehicleName}
										onChange={(e) => setVehicleName(e.currentTarget.value)}
									/>
									<div className={'UIInput-placeholder'}>Название</div>
								</div>
								<div className={'UIInput'}>
									<TextareaAutosize
										required
										value={vehicleDescription}
										onChange={(e) => setVehicleDescription(e.currentTarget.value)}
									/>
									<div className={'UIInput-placeholder'}>Описание</div>
								</div>
								<label className={classes['file']}>
									<input
										placeholder={'Добавить файлы'}
										type='file'
										minLength={2}
										multiple
										onChange={(e) => setVehicleImages(e.target.files)}
									/>
									<span className={classes['file-span']}>
										{vehicleImages
											? 'Добавлено: ' + vehicleImages.length + ' шт.'
											: 'Добавить файл'}
									</span>
								</label>
								<UIButton type={'text-small'} onClick={() => createVehicleHandler()}>
									Добавить технику
								</UIButton>
							</div>
						) : (
							<UIButton type={'outline'} onClick={() => setVehicleCreation(true)}>
								Добавить технику
							</UIButton>
						)}
					</div>

					{/* ////// */}

					<div className={classes['Admin__item']}>
						<div className={classes['Admin__item-title']}>Категории товаров</div>
						<hr />
						<div className={classes['Admin__item-categories']}>
							{catalogCategories.map((i) => (
								<div
									className={
										i.id === currentCatalogCategory.id
											? classes['Admin__item-categories-item-active']
											: classes['Admin__item-categories-item']
									}
									key={i.id}
									onClick={() => dispatch(setCurrentCatalogCategory(i))}
								>
									<div
										className={classes['Admin__item-categories-item-image']}
										style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}${i.img})` }}
									/>
									<p
										className={classes['Admin__item-categories-item-title']}
										style={{ marginRight: 50 }}
									>
										{i.title}
									</p>
									<UIButton
										type={'text'}
										onClick={() =>
											dispatch(deleteCatalogCategory(i)).then(() =>
												dispatch(fetchCatalogCategories())
											)
										}
									>
										Удалить
									</UIButton>
								</div>
							))}
						</div>
						{creationCatalogCategory ? (
							<div
								className={classes['Admin__item-categories-form']}
								style={creationCatalogCategory && { flexDirection: 'column' }}
							>
								<div className={'UIInput'}>
									<input
										required
										value={catalogCategoryName}
										onChange={(e) => setCatalogCategoryName(e.currentTarget.value)}
									/>
									<div className={'UIInput-placeholder'}>Категория</div>
								</div>
								<label className={classes['file']}>
									<input
										placeholder={'Добавить файл'}
										type='file'
										onChange={(e) => setCatalogCategoryImage(e.target.files)}
									/>
									<span className={classes['file-span']}>
										{catalogCategoryImage
											? catalogCategoryImage[0].name.length > 20
												? `${catalogCategoryImage[0].name.substring(0, 20)}...`
												: catalogCategoryImage[0].name
											: 'Добавить файл'}
									</span>
								</label>
								<UIButton type={'text-small'} onClick={() => createCatalogCategoryHandler()}>
									Добавить категорию
								</UIButton>
							</div>
						) : (
							<UIButton type={'outline'} onClick={() => setCreationCatalogCategory(true)}>
								Добавить Категорию
							</UIButton>
						)}
					</div>

					{/* ////////// */}

					<div className={classes['Admin__item']}>
						<div className={classes['Admin__item-title']}>Каталог товаров</div>
						<hr />
						<div className={classes['Admin__item-categories']}>
							{catalogProducts.map((i: any) => (
								<div
									className={
										i === currentCatalogCategory
											? classes['Admin__item-categories-item-active']
											: classes['Admin__item-categories-item']
									}
									key={i.id}
								>
									<div
										className={classes['Admin__item-categories-item-image']}
									/>
									<p
										className={classes['Admin__item-categories-item-title']}
										style={{ marginRight: 50 }}
									>
										{i.title}
									</p>
									<UIButton
										type={'text'}
										onClick={() =>
											dispatch(deleteCatalogProduct(i)).then(() =>
												dispatch(fetchCatalogProducts(currentCatalogCategory, page, limit))
											)
										}
									>
										Удалить
									</UIButton>
								</div>
							))}
						</div>
						{creationCatalogProduct ? (
							<div className={classes['Admin__item-categories-form']} style={{ flexDirection: 'column' }}>
								<div className={'UIInput'}>
									<input
										required
										value={catalogProductName}
										onChange={(e) => setCatalogProductName(e.currentTarget.value)}
									/>
									<div className={'UIInput-placeholder'}>Название товара</div>
								</div>
								<UIButton type={'text-small'} onClick={() => createCatalogProductHandler()}>
									Добавить товар
								</UIButton>
							</div>
						) : (
							<UIButton type={'outline'} onClick={() => setCreationCatalogProduct(true)}>
								Добавить товар
							</UIButton>
						)}
					</div>
				</div>
			</Layout>
			<Footer />
		</Background>
	);
};

export default Admin;
