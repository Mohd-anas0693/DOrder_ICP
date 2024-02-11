import React, { useState } from 'react';
import { useAuth } from '../../utils/useAuthClient';
import { createActor } from '../../../../declarations/backend';
import { getValueByKeyFromString } from '../../utils/getValueByKeyFromString';
import { useNavigate } from 'react-router-dom';

const SignupFormSeller = () => {
    const navigate = useNavigate();
    const { isAuthenticated, identity } = useAuth();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [govtId, setGovtId] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');

    const canisterId =
        process.env.CANISTER_ID_BACKEND ||
        process.env.BACKEND_CANISTER_ID;

    const onBoardSeller = async () => {
        try {
            const backendActor = createActor(canisterId, { agentOptions: { identity: identity } });
            const res = await backendActor.createSellerAccount(
                {
                    name: name,
                    govId: govtId,
                    address: address,
                    country: country,
                    phoneNo: phone,
                }
            );
            console.log("response-of-create-seller", res);
            return true;
        } catch (error) {
            console.log("error-in-create-seller", error)
            let errMessage = getValueByKeyFromString(error.toString(), "Message");
            console.log("errMessage-in-create-seller", errMessage)
            return false;
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleGovtIdChange = (e) => {
        setGovtId(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // Perform validations here

        // Call onBoardSeller function
        if (!isAuthenticated || !identity) {
            navigate('/');
        } else if (isAuthenticated && identity && name && address && govtId && phone && country) {
            onBoardSeller();
        } else {
            alert("Invalid Inputs");
        }
    };

    // const onBoardSeller = () => {
    //     // Implement onBoardSeller function here
    // };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="govtId" className="block text-gray-700 font-medium mb-2">
                            Government ID
                        </label>
                        <input
                            type="text"
                            id="govtId"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your government ID"
                            value={govtId}
                            onChange={handleGovtIdChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your country"
                            value={country}
                            onChange={handleCountryChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupFormSeller;