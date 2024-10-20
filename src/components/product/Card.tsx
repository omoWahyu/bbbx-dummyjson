import { useRef } from "react";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { usdToIdr } from '../../utils/usdToIdr';
import { iProduct } from "../../utils/types";

interface ProductCardProps {
    product: iProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {


    const imageRef = useRef<HTMLImageElement>(null);
    const isVisible = useIntersectionObserver(imageRef, { threshold: 0.1, rootMargin: '100px' });
    const mainImage = product.images && product.images.length > 0 ? product.images[0] : '';
    return <>
        <div>
            {product?.title}
            <div className="relative flex justify-center items-center w-40 h-40 border-2 rounded-lg border-[#8c8c8c]">
                {product.discountPercentage > 0 && (
                    <div className="text-red-500 absolute left-0 top-0"> {Math.round(product.discountPercentage)}%
                    </div>

                )}
                <img
                    ref={imageRef}
                    loading='lazy'
                    src={isVisible ? mainImage : ''}
                    alt={product?.title}
                    className="w-auto h-full"
                />
            </div>
            <div className="">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="font-bold" style={{ textDecoration: product.discountPercentage > 0 ? 'line-through' : undefined }}>{usdToIdr(Number(product.price))}</p>
                {product.discountPercentage > 0 && (
                    <p className="text-red-500 font-bold">{usdToIdr(Number(product.price - (product.price * product.discountPercentage / 100)))}</p>
                )}
                <p>Rating: {product.rating} ★</p>
                <p>Stock: {product.stock} {product.stock <= 5 ? '(Low Stock)' : ''}</p>
            </div>
        </div>
    </>
}

export default ProductCard;