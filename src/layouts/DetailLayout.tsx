import { useMediaQuery } from 'react-responsive';

import Footer from '../components/ui/Footer';
import { HeaderDetail as Header } from '../components/ui/Header';
import ProductHead from '../components/product/Head';

import { iProduct } from '../utils/types';

export default function DetailLayout({ children, data, addToWishlist }: { children: React.ReactNode; data: iProduct; addToWishlist: (product: iProduct) => void }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div>
            <Header />
            {!isMobile && <ProductHead data={data} addToWishlist={addToWishlist} />}
            <main className='max-w-screen-lg mx-auto px-4 pt-14 mb-20'>
                {children}
            </main>
            {isMobile && (
                <div className='fixed bottom-0 bg-white/50 backdrop-blur w-full px-4 pt-2 pb-4'>
                    <button
                        disabled
                        className="disabled:bg-slate-300 w-full disabled:text-slate-50 bg-blue-500 text-white px-6 py-3 mt-2 rounded-md"
                    >
                        Beli Sekarang
                    </button>
                </div>
            )}
            <Footer />
        </div>
    );
}

