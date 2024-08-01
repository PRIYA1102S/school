import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-customColor p-4">
            <div className="container flex justify-between items-center">
                <Link to="/">
                    <img src="/images/sch.png" alt="Logo" className="h-10" />
                </Link>
                <div className="space-x-4">
                    <Link
                        to="/"
                        className={`${location.pathname === '/' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about-us"
                        className={`${location.pathname === '/about-us' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/academics"
                        className={`${location.pathname === '/academics' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Academics
                    </Link>
                    <Link
                        to="/admissions"
                        className={`${location.pathname === '/admissions' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Admissions
                    </Link>
                    <Link
                        to="/faculty"
                        className={`${location.pathname === '/faculty' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Faculty
                    </Link>
                    <Link
                        to="/students"
                        className={`${location.pathname === '/students' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Students
                    </Link>
                    <Link
                        to="/gallery"
                        className={`${location.pathname === '/gallery' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/contact-us"
                        className={`${location.pathname === '/contact-us' ? 'bg-orange-500 text-white' : 'text-textc'
                            } font-bold hover:bg-orange-500 p-2 rounded`}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
