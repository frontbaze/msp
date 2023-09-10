export interface ICategory{
    id: number
    name: string
    img: string
}
export interface IVehicle{
    categoryId: number
    createdAt: string
    description: string
    id: number
    image: string
    name: string
    price: 0
    updatedAt: string
    vehicleCategoryId: number | null
    images? : File[]

}
export interface IVehicles{
    count: number
    rows: IVehicle[]
}
export interface IReview{
    id: number
    message: string
}

export interface ICatalogCategory {
    id: number;
    title: string;
    img: string;
}

export interface ICatalogProduct {
    id: number;
    categoryId: number;
	title: string;
}