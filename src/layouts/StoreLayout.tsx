export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <header className="w-full">Header</header>
            {children}
            <footer className="w-full">Footer</footer>
        </main>
    );
}
