import ProductCard from "../components/product/Card";
import useProducts from "../hooks/useProducts";
import StoreLayout from "../layouts/StoreLayout";
import { iProduct } from "../utils/types";

const Home = () => {
    const { data, error, isLoading } = useProducts();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <StoreLayout>
            {data?.map((product: iProduct) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </StoreLayout>
    );
}

export default Home;

