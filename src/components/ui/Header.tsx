import { Link } from 'react-router-dom';

import WishlistDropdown from './WishlistDropdown';

export const Header = () => {
    return (
        <header className='sticky top-0 z-20 w-full bg-slate-100/40 md:bg-slate-100 backdrop-blur'>
            <div className="relative max-w-screen-xl mx-auto h-16 px-4">
                <div className="h-full flex items-center justify-between">
                    <Link to="/" className="">
                        <h1 className='font-black text-xl'>DummyJson
                            <span className='text-white bg-sky-500 ml-2 py-1 px-2 rounded'>API</span></h1>
                    </Link>
                    <WishlistDropdown />
                </div>
            </div>
        </header>
    );
}
