import React from 'react';
import Home from './Components/Home';
import Header from './Components/Slides/Header';
import CustomerDashboard from './Components/Customer/CustomerDashboard';

const App = () => {
    return (
        <>
            <Header />
            <CustomerDashboard/>
            {/* <Home /> */}
        </>
    );
};

export default App;
