import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/useAuthClientHelper';
import { createActor } from '../../../../declarations/backend/index';
import { getValueByKeyFromString } from '../../utils/getMessage';
import { toast } from 'react-toastify';
import SellerSignUp from '../Forms/SellerSignUp';
import SellerProductsDashboard from './SellerProductsDashboard';

const SellerDashboard = () => {
    const { identity, backendCanisterId } = useAuth();
    const [products, setProducts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        // Add more fields as needed
    });

    const handleInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleAddProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({
            name: '',
            price: '',
            // Reset other fields as needed
        });
        setModalOpen(false);
    };


    const [isSeller, setIsSeller] = useState(null);

    const checkIfSeller = async () => {
        let backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
        try {
            const res = await backendActor.getSellerInfo();
            console.log("res", res);
            if (res) {
                if(res === 'you are not seller'){
                    return false;
                }
                return true;
            } else {
                return false;
            }
        } catch (error) {
            let errMessage = await getValueByKeyFromString(error.toString(), "Reject text");
            console.log("errMessage", errMessage);
            toast.error(errMessage);
            return false;

        }
    }


    useEffect(() => {
        if (identity && backendCanisterId) {
            const res = checkIfSeller();
            setIsSeller(res);
            // const actor = createActor(identity);
            // actor.getProducts().then((products) => {
            //     setProducts(products);
            // });
        }
    }, [identity, backendCanisterId]);

    return (
        <div className='h-full w-full py-16 flex justify-center items-center'>
            {isSeller ?
                <SellerProductsDashboard identity={identity} backendCanisterId={backendCanisterId} />
                : isSeller === false ?
                    <SellerSignUp identity={identity} backendCanisterId={backendCanisterId} />
                    : <h1>Loading...</h1>
            }
            {/* <button onClick={() => setModalOpen(true)}>Add Product</button> */}

        </div>
    );
};

export default SellerDashboard;
