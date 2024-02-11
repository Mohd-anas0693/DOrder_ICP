import React, { useEffect } from 'react';
import { useAuth } from '../utils/useAuthClientHelper';

const Home = () => {
    const { login, isAuthenticated } = useAuth();
    const loginHandler = async () => {
        await login().then(() => {
            window.location.href= '/home';
        });
    }
    useEffect(() => {
        if(isAuthenticated){
            window.location.href= '/home';
        }
    },[isAuthenticated]);
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-blue-800">Welcome to Dorder!</h1>
            <button onClick={loginHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Internet Identity
            </button>
        </div>
    );
};

export default Home;
