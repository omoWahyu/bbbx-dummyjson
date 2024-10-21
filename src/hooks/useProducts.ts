import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../utils/api";
import { iProduct } from "../utils/types";

export const useProducts = () => {
	return useQuery<iProduct[], Error>({
		queryKey: ["products"],
		queryFn: () => getProducts(),
		staleTime: 1000 * 60 * 15,
	});
};

export const useProduct = (id: string) => {
	return useQuery<iProduct, Error>({
		queryKey: ["product", id],
		queryFn: () => getProduct(id),
		staleTime: 1000 * 60 * 15,
	});
};
