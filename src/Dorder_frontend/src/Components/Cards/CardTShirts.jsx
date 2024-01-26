import React, { useEffect } from 'react';

const CardTShirts = (props) => {
    const tshirts = props.items;

    const addToCartHandler = (e, id) => {
        e.preventDefault();
        let btnId = e.target.id;
        let btn = document.getElementById(btnId);
        btn.innerHTML = `Adding...`;
        console.log(id);
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
        cartItems.push(id); // Add the new ID to the cartItems array
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Store the updated cartItems array in localStorage
        btn.innerHTML = `Added!!!`;
    };

    return (
        <>
            {tshirts && tshirts.map((val, index) => (
                <div className='md:w-1/3 p-4' key={index}>
                    <div className='w-full md:ml-0 h-fit flex flex-col bg-blue-500 rounded-lg p-4 cursor-context-menu'>
                        <div className='bg-slate-300 rounded-md overflow-hidden w-full h-[300px] cursor-not-allowed'>
                            <img src={val?.image ?? ''} alt={val?.item_name ?? 'Item Image'} draggable={false}/>
                        </div>
                        <div className='font-bold font-mono text-lg uppercase underline tracking-wide mt-2 flex justify-between'>
                            <p title='name'>{val?.item_name ?? ''}</p>
                        </div>
                        <div className='font-bold font-serif mt-2 flex justify-between'>
                            <p title='brand'>{val?.brand ?? ''}</p>
                            <p title='stock'>{val?.stock ?? ''}</p>
                        </div>
                        <div className='font-serif flex justify-between mt-2 font-bold'>
                            <p title='size'>{val?.size ?? ''}</p>
                            <p title='price'>{val?.price ?? ''}</p>
                        </div>
                        <div className='font-serif flex justify-between mt-2 font-bold'>
                            <p title='rating'>⭐️⭐️⭐️⭐️⭐️</p> {/* Unicode escape sequence */}
                        </div>
                        <div className='mt-2'>
                            {(val?.stock)
                                ? <button className='w-full text-yellow-900 bg-yellow-500 px-3 py-4 rounded-md hover:bg-yellow-400 uppercase font-bold' id={`cart${val?.id ?? index}`} onClick={(e) => addToCartHandler(e, val?.id)}>Add to Cart</button>
                                : <button className='w-full text-gray-400 bg-gray-800 px-3 py-4 rounded-md hover:bg-gray-400 uppercase font-bold hover:text-gray-800'>Add to Wishlist</button>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardTShirts;
