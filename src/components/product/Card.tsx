import { useRef } from "react";
import Star from '../../assets/icons/star';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { iProduct } from "../../utils/types";

import Pricing from './Pricing';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: iProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {


    const imageRef = useRef<HTMLImageElement>(null);
    const isVisible = useIntersectionObserver(imageRef, { threshold: 0.1, rootMargin: '100px' });
    const mainImage = product.images && product.images.length > 0 ? product.images[0] : '';
    return <>
        <Link to={`/product/${product.id}`} className='group bg-slate-200/0 hover:bg-slate-200/30 rounded-lg transition-all ease-in-out duration-300'>
            <div className="relative flex justify-center items-center aspect-square bg-slate-50 group-hover:bg-slate-200/20 rounded-lg  transition-all  ease-in-out duration-300">
                {product.stock <= 5 && (
                    <div className="absolute flex justify-between items-center w-full bottom-0 bg-slate-500/10 text-slate-500 py-1 px-2">
                        <strong className='text-xs font-medium'>Segera Habis

                        </strong>
                        <strong className='ml-2 text-xs'>
                            Tersisa {product.stock}
                        </strong>
                    </div>
                )}
                {product.discountPercentage >= 1 && (
                    <div className="absolute flex justify-center items-center -left-1 top-3 bg-[#FF204E] py-1 pl-2 pr-3 rounded-l-md rounded-r-xl">
                        <strong className='text-white text-xs'>{Math.round(product.discountPercentage)}%</strong>
                    </div>
                )}
                <img
                    ref={imageRef}
                    loading='lazy'
                    src={isVisible ? mainImage : ''}
                    alt={product?.title}
                    className="w-auto h-full p-5"
                />
            </div>

            <div className="mt-2">
                <h3 className='line-clamp-2 leading-tight mb-1'>
                    {product?.title}
                </h3>
                <Pricing price={product.price} discount={product.discountPercentage} />

                <div className='flex gap-1 my-1'>
                    <Star className='h-[18px] text-amber-400' />
                    <small className='self-center'>{product.rating.toFixed(1)}</small>
                </div>
                <div className="bg-slate-100 text-slate-500 font-medium text-xs px-2 py-0.5 rounded-md w-fit">
                    {product.category}
                </div>
            </div>
        </Link>
    </>
}

export default ProductCard;