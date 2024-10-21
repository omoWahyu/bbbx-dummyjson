// src/components/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

import StoreLayout from '../../layouts/StoreLayout';

import { useProduct } from '../../hooks/useProducts'; // Custom hook to fetch product data based on ID
import { usdToIdr } from '../../utils/usdToIdr';


const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get product ID from URL parameters
    const { data: product, isLoading } = useProduct(id!); // Fetch product data using custom hook

    if (isLoading || !product) {
        return <div>Loading...</div>;
    }
    console.log(product)

    return (
        <StoreLayout>
            <div className="sticky flex justify-between">
                <div className="">
                    <h1 className="font-semibold text-3xl">{product.title}</h1>
                    <div className="flex flex-col">

                        {product.discountPercentage >= 1 && (
                            <p className="text-red-500 text-2xl font-bold">{usdToIdr(Number(product.price - (product.price * product.discountPercentage / 100)))}</p>
                        )}
                        <div className="flex items-center gap-2">
                            {product.discountPercentage >= 1 && (
                                <div className=" flex justify-center items-center bg-[#FF204E] py-0.5 pl-2 pr-3 rounded-l-md rounded-r-xl">
                                    <strong className='text-white text-xs'>{Math.round(product.discountPercentage)}%</strong>
                                </div>
                            )}
                            <p
                                className={`
                                ${product.discountPercentage >= 1 ? 'font-light text-sm text-gray-400 line-through' : 'text-2xl font-bold'}
                                `}
                            >
                                {usdToIdr(Number(product.price))}
                            </p>
                        </div>

                    </div>
                </div>
                <div className="">
                    {/* <button onClick={() => addToWishlist(product)} className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
                        Buy
                    </button>
                    <button onClick={() => addToWishlist(product)} className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
                        Buy
                    </button> */}
                </div>
            </div>
            <div className='grid grid-cols-3'>

                {product.images && product.images.length > 0 && (
                    <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover rounded" />
                )}
                <div className="col-span-2">

                    <p className="mt-4">{product.description}</p>

                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock} {product.stock <= 5 ? '(Low Stock)' : ''}</p>
                    <p>Brand: {product.brand}</p>
                    <p>SKU: {product.sku}</p>
                </div>

            </div>

        </StoreLayout>
    );
};

export default ProductDetail;



