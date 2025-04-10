import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Invoice App</h1>
            <p className="text-lg text-gray-600 mb-6">
                Manage your invoices efficiently and effortlessly.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Get Started
            </button>
        </div>
    );
};

export default Home;