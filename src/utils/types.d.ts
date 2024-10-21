export interface iProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	category: string;
	rating: number;
	stock: number;
	images: string[];
	sku: string;
	brand: string;
}
