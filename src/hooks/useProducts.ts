import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../utils/api";

const useProducts = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});
};

export default useProducts;
