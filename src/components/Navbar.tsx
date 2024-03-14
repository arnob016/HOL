import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold flex tracking-wider">House of Lords</h1>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faGamepad} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;