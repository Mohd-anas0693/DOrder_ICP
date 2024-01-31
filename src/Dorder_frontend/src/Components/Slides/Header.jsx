import React from 'react';
import Dropdown from './Dropdown';

const Header = () => {

    const getCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        return cartItems.length;
    };

    return (
        <header className="bg-blue-500 w-full px-4 py-3 flex justify-center border-b-4 border-yellow-500">
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <p className='font-bold text-4xl text-gray-200 cursor-pointer hover:text-yellow-500'>Dorder</p>
                    <div className="sm:none flex items-center cursor-pointer">
                        <div title='cart items' className='border-2 w-8 h-8 flex justify-center items-center rounded-full mr-4'>
                            <span className='text-sm text-gray-200 hover:text-yellow-500 font-bold'>{getCartItems()}</span>
                        </div>
                        <Dropdown />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
