import React, { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <div className="navContainer flex justify-between items-center w-11/12 mx-auto mt-10 relative">

                <div className="navStart flex items-center gap-3">

                    <div
                        className="lg:hidden relative"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <button className="btn btn-ghost">
                            ☰
                        </button>

                        {isOpen && (
                            <ul className="absolute top-full left-0 bg-white shadow-md rounded w-40">
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Home</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">About</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Contact</li>
                            </ul>
                        )}
                    </div>
                    <div className="logo">
                        <h1 className="text-xl font-bold">Rechart</h1>
                    </div>

                </div>

                <div className="navCenter hidden lg:flex">
                    <ul className="flex gap-6 items-center">
                        <li className="hover:text-blue-500 cursor-pointer">Home</li>
                        <li className="hover:text-blue-500 cursor-pointer">About</li>
                        <li className="hover:text-blue-500 cursor-pointer">Profile</li>
                        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div className="navEnd">
                    <button className="btn btn-ghost">LogOut</button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;