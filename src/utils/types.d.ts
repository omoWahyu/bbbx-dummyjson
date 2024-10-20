// src/types/product.d.ts
export interface iProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	category: string;
	rating: number;
	stock: number;
	images: string[]; // Array of image URLs
	sku: string;
	brand: string;
}
