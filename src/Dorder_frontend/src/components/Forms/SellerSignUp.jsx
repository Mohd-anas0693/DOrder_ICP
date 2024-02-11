import React, { useState } from 'react';
import { getValueByKeyFromString } from '../../utils/getMessage';
import { createActor } from '../../../../declarations/backend/index';
import { useNavigate } from 'react-router-dom';
const SellerSignUp = ({ identity, backendCanisterId }) => {
    const { navigate } = useNavigate();
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

    const onBoardSeller = async () => {
        try {
            const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
            await backendActor.createSellerAccount(
                {
                    name: name,
                    govId: govId,
                    address: address,
                    country: country,
                    phoneNo: phone,
                }
            ).then((res) => {
                navigate('/');
            }).catch((err) => {
                console.log("err", err)
            });
            return true;
        } catch (error) {
            let errMessage = getValueByKeyFromString(error.toString(), "Reject text");
            console.log("error-in-create-seller", error)
            console.log("errMessage-in-create-seller", errMessage)
            return false;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form values
        if (name && govId && phone && country && address) {
            onBoardSeller();
        } else {
            alert("Invalid Inputs");
        }
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
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SellerSignUp;