import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-customColor text-textc p-6 mt-8 w-full max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col space-y-4">
                    <Link to="/">
                        <img src="/images/sch.png" alt="Logo" className="h-12 mb-4" />
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Providing quality education since 1985. Dedicated to nurturing young minds and fostering a love for learning.
                    </p>
                </div>

                {/* Home and About Us List */}
                <div className="flex flex-col space-y-2">
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link to="/academics" className="hover:underline">Academics</Link></li>
                        <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
                    </ul>
                </div>

                {/* Faculty and Students List */}
                <div className="flex flex-col space-y-2">
                    <ul className="space-y-2">
                        <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
                        <li><Link to="/students" className="hover:underline">Students</Link></li>
                        <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
                        <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Address and Social Media Icons */}
                <div className="flex flex-col space-y-4">
                    <div className="text-sm leading-relaxed">
                        <p>123 School Lane<br />
                            City, State, 12345<br />
                            Phone: (123) 456-7890<br />
                            Email: <a href="mailto:info@school.com" className="hover:underline">info@school.com</a></p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/facebook.png" alt="Facebook" className="h-8 w-8 hover:opacity-75 transition-opacity duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/twitter.png" alt="Twitter" className="h-8 w-8 hover:opacity-75 transition-opacity duration-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/instagram.png" alt="Instagram" className="h-8 w-8 hover:opacity-75 transition-opacity duration-300" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin (1).png" alt="LinkedIn" className="h-8 w-8 hover:opacity-75 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm border-t border-gray-200 pt-4">
                &copy; {new Date().getFullYear()} SpringDale Public School. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
