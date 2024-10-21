export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="w-full">Header</header>
            <main className='mx-4'>
                {children}
            </main>
            <footer className="w-full">Footer</footer>
        </div>
    );
}
