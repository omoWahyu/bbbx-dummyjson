import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Wishlist from '../../assets/icons/wishlist';
import useStore from '../../store/useStore';
import { iProduct } from '../../utils/types';

const WishlistDropdown = () => {
    const wishlist = useStore((state) => state.wishlist);
    const wishlistCount = useStore((state) => state.wishlistCount());
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button
                className="group relative"
                // onClick={toggleDropdown}
                onMouseDown={() => setIsOpen((prev) => !prev)}
            >
                {wishlistCount > 0 && (
                    <span className="absolute z-10 -top-1 -right-1 rounded-full bg-rose-500 text-white text-xs text-center w-4 h-4 group-hover:scale-125 cursor-default transition-all ease-in-out duration-300">
                        {wishlistCount}
                    </span>
                )}

                <Wishlist className='w-6 group-hover:fill-current text-gray-700 group-hover:text-rose-500 transition-all ease-in-out duration-300 group-hover:scale-125' />
                <span></span>
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute top-10 right-2 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-20">
                    <div className="p-2 border-b font-semibold">Wishlist</div>
                    <div className="max-h-56 overflow-y-auto">
                        {wishlist.length > 0 ? (
                            wishlist.map((item: iProduct) => (
                                <Link to={`/product/${item.id}`} key={item.id} className="flex items-center gap-2 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                    <div className="w-16 h-16 p-2 aspect-square">
                                        <img className='w-full h-full ' src={item.images[0]} alt="" />
                                    </div>
                                    <p className='text-sm'>{item.title}</p>
                                </Link>
                            ))
                        ) : (
                            <div className="p-2 text-gray-600">Belum ada Wishlist</div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default WishlistDropdown;

