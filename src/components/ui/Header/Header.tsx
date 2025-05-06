import React from 'react';

const Header: React.FC = () => {
    return (
        <header >
            <h1 >My Fish Market</h1>
            <nav className="mt-2">
                <ul className="flex justify-center gap-4 list-none p-0 m-0">
                    <li><a href="#home" className="text-white no-underline text-base">Home</a></li>
                    <li><a href="#about" className="text-white no-underline text-base">About</a></li>
                    <li><a href="#contact" className="text-white no-underline text-base">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;