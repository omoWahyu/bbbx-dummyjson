import axios from "axios";
const url = import.meta.env.VITE_API_PRODUCTS;

export const getProducts = async () => {
	const response = await axios.get(url);
	return response.data.products;
};
