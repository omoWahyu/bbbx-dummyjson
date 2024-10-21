import Footer from '../components/ui/Footer';
import { Header } from '../components/ui/Header';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main className='mx-4 min-h-screen'>
                {children}
            </main>
            <Footer />
        </div>
    );
}
