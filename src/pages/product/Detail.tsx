// src/components/ProductDetail.tsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import DetailLayout from '../../layouts/DetailLayout';
import ProductHead from '../../components/product/Head';
import ProductCard from '../../components/product/Card';

import useStore from '../../store/useStore';
import { useProduct, useProducts } from '../../hooks/useProducts'; // Custom hook to fetch product data based on ID
import { usdToIdr } from '../../utils/usdToIdr';
import Wishlist from '../../assets/icons/wishlist';


const ProductDetail: React.FC = () => {
    const { addToWishlist } = useStore();
    const { id } = useParams<{ id: string }>(); // Get product ID from URL parameters
    const { data: products } = useProducts();
    const { data: product, isLoading } = useProduct(id!); // Fetch product data using custom hook

    const [mainImage, setMainImage] = useState('');

    if (isLoading || !product) {
        return <div></div>;
    }

    const changeMainImage = (img: string) => {
        setMainImage(img);
    };

    return (
        <div>
            <DetailLayout data={product} addToWishlist={addToWishlist}>

                <div className='grid grid-cols-3 gap-3 mt-6 mb-12'>

                    <div className='relative flex justify-center items-center aspect-square bg-slate-50 group-hover:bg-slate-200/20 rounded-lg  transition-all  ease-in-out duration-300'>
                        <img
                            loading='lazy'
                            src={mainImage || (product.images && product.images.length > 0 ? product.images[0] : '')}
                            alt={product?.title}
                            sizes="(max-width: 1024px) 50vw"
                            className="w-auto h-full p-5"
                        />
                        <div
                            className='absolute top-2 right-2 cursor-pointer'
                            onClick={(e) => {
                                addToWishlist(product);
                                e.currentTarget.classList.toggle('text-rose-500');
                            }}
                        >
                            <Wishlist className='h-8 fill-current hover:text-rose-500 transition-all ease-in-out duration-300' />
                        </div>
                        <div className="absolute flex gap-1 items-center w-full bottom-1  py-1 px-2">
                            {product.images?.map((img) => (
                                <div
                                    key={img}
                                    className='border p-2 rounded-md cursor-pointer hover:border-slate-400 transition-all ease-in-out duration-300'
                                    onClick={() => changeMainImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={product?.title}
                                        className='h-10'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h3 className='font-medium'>Product Description</h3>
                        <p className="mt-4">{product.description}</p>

                        <p>Category: {product.category}</p>
                        <p>Stock: {product.stock} {product.stock <= 5 ? '(Low Stock)' : ''}</p>
                        <p>Brand: {product.brand}</p>
                        <p>SKU: {product.sku}</p>
                    </div>

                </div>
                <div className="">
                    <h3 className='font-medium'>Related Products</h3>
                    <div className="grid grid-cols-6 gap-3 mt-6">

                        {products
                            ?.filter((p) => p.id !== product.id)
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 5)
                            .map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))}
                        <Link
                            to="/"
                            className="group text-center flex justify-center items-center bg-slate-50/30 hover:bg-sky-300/10 rounded-md  transition-all ease-in-out duration-300">
                            <span className='group-hover:font-medium group-hover:scale-110 transition-all ease-in-out text-slate-500 group-hover:text-sky-500'>lihat semua</span>
                        </Link>
                    </div>
                </div>
            </DetailLayout>
        </div>
    );
};

export default ProductDetail;

