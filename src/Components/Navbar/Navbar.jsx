import React from 'react';

const Navbar = () => {
    return (
     <div>
        <div className="navContainer flex justify-between items-center">
            <div className="navStart">

                  <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <div className="logo">
                        <h1>Rechart</h1>
                    </div>

            </div>
            <div className="navCenter">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="navEnd">
                <button className='btn btn-ghost'>LogOut</button>
            </div>
        </div>
     </div>
    );
};

export default Navbar;