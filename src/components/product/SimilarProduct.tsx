import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/product/Card';


const SimilarProduct = () => {
    const { data: products } = useProducts();
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);

    const similarProducts = useMemo(() => {
        return products
            ?.filter((p) => p.id !== productId)
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
    }, [products, productId]);
    return (

        <div className="w-full">
            <h3 className='font-medium'>Produk Serupa</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">

                {similarProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                <Link
                    to="/"
                    className="group text-center flex justify-center items-center bg-slate-50/30 hover:bg-sky-300/10 rounded-md  transition-all ease-in-out duration-300">
                    <span className='group-hover:font-medium group-hover:scale-110 transition-all ease-in-out text-slate-500 group-hover:text-sky-500'>lihat semua</span>
                </Link>
            </div>
        </div>
    )
};

export default SimilarProduct;