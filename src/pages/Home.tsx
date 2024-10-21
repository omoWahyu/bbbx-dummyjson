import { useState, useEffect } from "react";
import ProductCard from "../components/product/Card";
import FilterSearchBar from '../components/ui/SearchBar';

import { useProducts } from "../hooks/useProducts";
import StoreLayout from "../layouts/StoreLayout";
import { iProduct } from '../utils/types';

const Home = () => {
    const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([]);
    const { data: products = [] } = useProducts();

    useEffect(() => {
        if (products) {
            setFilteredProducts(products); // Initially show all products
        }
    }, [products]);

    const handleFilterChange = (filteredData: iProduct[]) => {
        setFilteredProducts(filteredData); // Update filtered products on user input
    };
    return (
        <StoreLayout>
            <div className=''>
                <FilterSearchBar data={products} onFilter={handleFilterChange} />
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </StoreLayout>
    );
}

export default Home;



