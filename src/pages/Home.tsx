import ProductCard from "../components/product/Card";
import { useProducts } from "../hooks/useProducts";
import StoreLayout from "../layouts/StoreLayout";

const Home = () => {
    const { data: products, error, isLoading } = useProducts();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    console.log(products)
    return (
        <StoreLayout>
            <div className='max-w-screen-lg mx-auto'>

                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </StoreLayout>
    );
}

export default Home;


