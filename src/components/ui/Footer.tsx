import { useMediaQuery } from 'react-responsive';
import { Github, Linkedin, Whatsapp } from "@styled-icons/bootstrap";

const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <footer className='w-full bg-gray-100'>
                <div className="max-w-screen-xl mx-auto flex justify-between py-3 px-4">
                    <div className="">
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
                    <div className="flex gap-3 items-center text-gray-600">
                        <a
                            href="https://wa.me/6289687407837"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Whatsapp className='w-6 hover:text-green-400 hover:scale-110 transition-all ease-in-out duration-300' />
                        </a>
                        <a
                            href="https://github.com/omoWahyu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className='w-6 hover:text-black hover:scale-110 transition-all ease-in-out duration-300' />
                        </a>
                        <a
                            href="https://linkedin.com/in/omowahyu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin className='w-6 hover:text-blue-600 hover:scale-110 transition-all ease-in-out duration-300' />
                        </a>
                    </div>
                </div>
            </footer>
            {isMobile && (
                <div className="h-20"></div>)}
        </>
    );
}

export default Footer;