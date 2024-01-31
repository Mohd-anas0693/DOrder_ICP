import React from 'react';
import { tshirts } from '../../data/tshirts';
import CardTShirts from '../Cards/CardTShirts';

const CustomerDashboard = () => {
 
    return (
        <div className="flex justify-center bg-blue-100">
            <div className='max-w-6xl pt-4 w-full flex flex-wrap flex-col md:flex-row justify-center mt-16'>
                <CardTShirts items={tshirts}/>
            </div>
        </div>
    );
};

export default CustomerDashboard;
