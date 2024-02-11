import React, { useState } from 'react';

const UserSignUp = ({ setSignUpUserModal, onBoardUserHandler }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'dob':
                setDob(value);
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
        setIsLoading(true);
        // Do something with the form values
        if (name && email && dob && address) {
            onBoardUserHandler({ name, email, dob, address });
        } else {
            setIsLoading(false);
            alert("Invalid Inputs");
        }
    };

    const closeFormHandler = () => {
        setName('');
        setEmail('');
        setDob('');
        setAddress('');
        setSignUpUserModal(false);
    }
    return (
        <React.Fragment>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Add Product
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Doe" required="true" value={name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="yourname@example.com" required="true" value={email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Birth Date</label>
                            <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="true" value={dob} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                            <textarea rows="8" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="your full address..." required="true" value={address} onChange={handleInputChange}></textarea>
                        </div>

                        <div className='flex gap-2 justify-center px-2'>
                            <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {isLoading ? `Submitting...` : `Submit`}
                            </button>
                            <button onClick={closeFormHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserSignUp;