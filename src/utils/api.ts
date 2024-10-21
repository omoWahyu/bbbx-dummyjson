import axios from "axios";
const url = import.meta.env.VITE_API_PRODUCTS;
import { iProduct } from "./types";

export const getProducts = async (): Promise<iProduct[]> => {
	const response = await axios.get(url);
	return response.data.products;
};

export const getProduct = async (id: string): Promise<iProduct> => {
	const response = await axios.get<iProduct>(`${url}/${id}`);
	return response.data;
};
