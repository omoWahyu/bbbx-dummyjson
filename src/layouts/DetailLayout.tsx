import Footer from '../components/ui/Footer';
import { HeaderDetail as Header } from '../components/ui/Header';
import ProductHead from '../components/product/Head';

import { iProduct } from '../utils/types';

export default function DetailLayout({ children, data, addToWishlist }: { children: React.ReactNode; data: iProduct; addToWishlist: (product: iProduct) => void }) {
    return (
        <div>
            <Header />
            <ProductHead data={data} addToWishlist={addToWishlist} />
            <main className='max-w-screen-lg mx-auto px-4 pt-14 mb-20'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

