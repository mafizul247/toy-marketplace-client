import React, { useContext, useState } from 'react';
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navber = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left side: Brand Logo and Name */}
                    <Link to='/'>
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block h-8 w-auto" src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg" alt="Brand Logo" />
                            <span className="ml-2 text-white font-semibold text-lg">Brand Name</span>
                        </div>
                    </Link>

                    {/* Center: Menu Items (Desktop) */}
                    <div className="hidden md:flex justify-center flex-grow">
                        <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to='/register' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                        <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                    </div>

                    {/* Right side: User Image and Login/Logout */}
                    <div className="ml-4 flex items-center">
                        <img className="h-8 w-8 rounded-full" src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg" alt="User Image" />
                        <div className="ml-2 text-white">
                            {/* Replace the link "#" with your actual login/logout link */}
                            <a href="#" className="font-semibold">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Center: Menu Items (Mobile) */}
            <div className="md:hidden bg-gray-700 px-2 pt-2 pb-3 sm:px-3">
                <button onClick={toggleMenu} className="block focus:outline-none">
                    <div className="h-8 w-8 fill-current text-gray-300" >
                        {isMenuOpen ?
                            <FaWindowClose className='text-2xl' /> : <FaAlignJustify className='text-2xl' />
                        }
                    </div>
                </button>
                {isMenuOpen && (
                    <div className="mt-2">
                        <Link to='/' className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to='/register' className="text-gray-300 mt-1 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
                        <Link to='/login' className="text-gray-300 mt-1 block px-3 py-2 rounded-md text-base font-medium">Login</Link>

                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navber;