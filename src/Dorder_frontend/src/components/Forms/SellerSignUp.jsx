import React, { useState } from 'react';

const SellerSignUp = () => {
    const [name, setName] = useState('');
    const [govId, setGovId] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'govId':
                setGovId(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'address':
                setAddress(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form values
        console.log(name, govId, phone, country, address);

        
    };

    return (
        <React.Fragment>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Create a seller account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Doe" required="true" value={name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="govId" className="block mb-2 text-sm font-medium text-gray-900">Government Id</label>
                            <input type="text" name="govId" id="govId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="PAN Card Number" required="true" value={govId} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                            <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="1122112211" required="true" value={phone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <input type="text" name="country" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="India" required="true" value={country} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                            <textarea rows="8" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="India" required="true" value={address} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full border-2 border-black text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SellerSignUp;