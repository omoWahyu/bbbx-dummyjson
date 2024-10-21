// src/components/ProductDetail.tsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { usdToIdr } from '../../utils/usdToIdr';
import useStore from '../../store/useStore';
import { useProduct, useProducts } from '../../hooks/useProducts';

import DetailLayout from '../../layouts/DetailLayout';
import ProductCard from '../../components/product/Card';
import Wishlist from '../../assets/icons/wishlist';


const ProductDetail: React.FC = () => {
    const { addToWishlist, removeFromWishlist, isProductInWishlist } = useStore();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { id } = useParams<{ id: string }>(); // Get product ID from URL parameters
    const { data: products } = useProducts();
    const { data: product } = useProduct(id!); // Fetch product data using custom hook

    const [mainImage, setMainImage] = useState('');

    if (!product) {
        return <div></div>;
    }

    const inWishlist = isProductInWishlist(product.id);
    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };


    const changeMainImage = (img: string) => {
        setMainImage(img);
    };

    return (
        <div>
            <DetailLayout data={product}>

                <div className='grid lg:grid-cols-3 gap-3 mb-12'>

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
                            onClick={handleWishlistToggle}
                        >
                            <Wishlist className={`${inWishlist ? 'fill-current hover:scale-110 text-rose-600' : 'text-rose-400'} h-8 hover:fill-current transition-all ease-in-out duration-300`} />
                        </div>
                        <div className="absolute flex gap-1 items-center w-full bottom-1 py-1 px-2">
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
                    <div className="lg:col-span-2 mt-10 lg:mt-0">
                        {isMobile && (
                            <>
                                <h1 className="font-semibold text-2xl">{product.title}</h1>
                                <div className="flex flex-col">
                                    {product.discountPercentage >= 1 && (
                                        <p className="text-red-500 text-2xl font-bold">
                                            {usdToIdr(Number(product.price - (product.price * product.discountPercentage / 100)))}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2 mb-4">
                                        {product.discountPercentage >= 1 && (
                                            <div className="flex justify-center items-center bg-[#FF204E] py-0.5 pl-2 pr-3 rounded-l-md rounded-r-xl">
                                                <strong className="text-white text-xs">
                                                    {Math.round(product.discountPercentage)}%
                                                </strong>
                                            </div>
                                        )}
                                        <p
                                            className={`
                                    ${product.discountPercentage >= 1 ? 'font-light text-sm text-gray-400 line-through' : 'text-slate-700 text-2xl font-bold'}
                                `}
                                        >
                                            {usdToIdr(Number(product.price))}
                                        </p>
                                    </div>
                                </div>
                            </>

                        )}
                        <h3 className='font-medium'>Deskripsi Produk</h3>
                        <p className="mt-2 font-light text-gray-600">{product.description}</p>
                        <div className="divide-y divide-slate-200 border-b border-b-slate-200 mt-5">
                            <p className='flex items-center py-2 font-light'><span className='block w-32 text-slate-400'>Brand:</span>{product.brand}</p>
                            <p className='flex items-center py-2 font-light'><span className='block w-32 text-slate-400'>Category:</span>{product.category}</p>
                            <p className='flex items-center py-2 font-light'><span className='block w-32 text-slate-400'>Stock:</span>{product.stock} {product.stock <= 5 ? '(segera Habis)' : ''}</p>

                            <p className='flex items-center py-2 font-light'><span className='block w-32 text-slate-400'>SKU:</span>{product.sku}</p>
                        </div>
                    </div>

                </div>
                <div className="">
                    <h3 className='font-medium'>Produk Serupa</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">

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

