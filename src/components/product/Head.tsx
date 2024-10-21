import { iProduct } from '../../utils/types';
import { usdToIdr } from '../../utils/usdToIdr';


interface ProductProps {
    data: iProduct;
    addToWishlist: (product: iProduct) => void;
}

const ProductHead: React.FC<ProductProps> = ({ data, addToWishlist }) => {
    return (
        <div className="sticky top-16 z-10 w-full bg-white border-b">
            <div className="max-w-screen-xl mx-auto flex justify-between items-end py-4">
                <div className="">
                    <h1 className="font-semibold text-3xl">{data.title}</h1>
                    <div className="flex flex-col">
                        {data.discountPercentage >= 1 && (
                            <p className="text-red-500 text-2xl font-bold">
                                {usdToIdr(Number(data.price - (data.price * data.discountPercentage / 100)))}
                            </p>
                        )}
                        <div className="flex items-center gap-2">
                            {data.discountPercentage >= 1 && (
                                <div className="flex justify-center items-center bg-[#FF204E] py-0.5 pl-2 pr-3 rounded-l-md rounded-r-xl">
                                    <strong className="text-white text-xs">
                                        {Math.round(data.discountPercentage)}%
                                    </strong>
                                </div>
                            )}
                            <p
                                className={`
                                    ${data.discountPercentage >= 1 ? 'font-light text-sm text-gray-400 line-through' : 'text-slate-700 text-2xl font-bold'}
                                `}
                            >
                                {usdToIdr(Number(data.price))}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button
                        disabled
                        className="disabled:bg-slate-300 disabled:text-slate-50 bg-blue-500 text-white px-6 py-2 mt-2 rounded"
                    >
                        Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductHead;
