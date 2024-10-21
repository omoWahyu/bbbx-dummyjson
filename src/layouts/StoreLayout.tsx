import Footer from '../components/ui/Footer';
import { Header } from '../components/ui/Header';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main className='max-w-screen-lg mx-auto px-4 pt-14 mb-20'>
                {children}
            </main>
            <Footer />
        </div>
    );
}
