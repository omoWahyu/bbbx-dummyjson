const Footer = () => {
    return (
        <footer className='w-full'>
            <div className="max-w-screen-xl mx-auto py-2 px-4">
                <i className="text-sm text-slate-500">Create with ❤️</i>
                <a
                    className="flex items-center gap-2"
                    href="https://github.com/omoWahyu"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className='rounded-full h-6'
                        src="https://github.com/omoWahyu.png?size=200"
                        alt="omoWahyu Github" />
                    <h1>omoWahyu</h1>
                </a>

            </div>
        </footer>
    );
}

export default Footer;