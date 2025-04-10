import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">Invoice App</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link
                            to="/home"
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
                        >
                            Home
                        </Link>
                        <a
                            href="/FeaturesDropdown"
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
                        >
                            Features
                        </a>
                        <a
                            href="/ContactPage"
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
                        >
                            Contact
                        </a>
                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Signup
                        </Link>
                        <Link
                            to="/"
                            className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;