import { Link } from 'react-router-dom';
import Wishlist from '../../assets/icons/wishlist';

export const Header = () => {
    return (
        <header className='sticky top-0 z-10 w-full bg-slate-100'>
            <div className="max-w-screen-xl mx-auto h-16  px-4">
                <div className="h-full flex items-center justify-between">
                    <div className="">
                        <h1 className='font-black text-xl'>DummyJson
                            <span className='text-white bg-sky-500 ml-2 py-1 px-2 rounded'>API</span></h1>
                    </div>

                    <div className="group">
                        <Wishlist className='w-6 group-hover:fill-current text-rose-500 transition-all ease-in-out duration-300 hover:scale-125' />
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}


export const HeaderDetail = () => {
    return (
        <header className='sticky top-0 z-10 w-full bg-slate-100'>
            <div className="max-w-screen-xl mx-auto h-16  px-4">
                <div className="h-full flex items-center justify-between">
                    <div className="">
                        <h1 className='font-black text-xl'>DummyJson
                            <span className='text-white bg-sky-500 ml-2 py-1 px-2 rounded'>API</span></h1>
                    </div>

                    <div className="group">
                        <Link to="/">Kembali</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
