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
    const [isSeller, setIsSeller] = useState(null);

    const checkIfSeller = async () => {
        let backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
        try {
            const res = await backendActor.getSellerStatus();
            console.log("res", res);
            setIsSeller(res);
            return res;
        } catch (error) {
            let errMessage = await getValueByKeyFromString(error.toString(), "Reject text");
            console.log("errMessage", errMessage);
            toast.error(errMessage);
            setIsSeller(false);
            return false;

        }
    }


    useEffect(() => {
        if (identity && backendCanisterId) {
          checkIfSeller();
            // const actor = createActor(identity);
            // actor.getProducts().then((products) => {
            //     setProducts(products);
            // });
        }
    }, [identity, backendCanisterId]);

    return (
        <div className='h-full w-full py-16 flex justify-center items-center'>
            {isSeller === true ?
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
