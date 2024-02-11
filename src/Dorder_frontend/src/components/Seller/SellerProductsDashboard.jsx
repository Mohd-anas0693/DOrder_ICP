import React, { useEffect, useState } from 'react';
import { getValueByKeyFromString } from '../../utils/getMessage';
import { createActor } from '../../../../declarations/backend/index';
import AddProduct from '../Forms/AddProduct';

const SellerProductsDashboard = ({ identity, backendCanisterId }) => {
    const [addProductModal, setAddProductModal] = useState(false);

    const addProductHandler = async (val) => {
        try {
            const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
            await backendActor.createProductItem(
                {
                    name: val?.name || "No name",
                    price: parseInt(val?.price) || 0,
                    stockLevel: val?.stock || "0",
                    images: val?.image || "No image",
                    description: val?.description || "No description"
                }
            ).then((res) => {
                console.log("res-in-success", res)
                setAddProductModal();
                listedProducts();
            }).catch((err) => {
                console.log("err", err)
            });
            return true;
        } catch (error) {
            let errMessage = getValueByKeyFromString(error.toString(), "Reject text");
            console.log("error-in-create-product", error)
            console.log("errMessage-in-create-product", errMessage)
            return false;
        }
    };

    const listedProducts = async () => {
        try {
            const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
            await backendActor.getAllProductsOfSeller().then((res) => {
                // navigate('/');
                console.log("res-in-success-GETPRODUCTS", res)
            }).catch((err) => {
                console.log("res-in-success-GETPRODUCTS", err)
            });
        } catch (error) {
            let errMessage = getValueByKeyFromString(error.toString(), "Message");
            console.log("error-in-GETPRODUCTS", error)
            console.log("errMessage-in-GETPRODUCTS", errMessage)
            return false;
        }
    };

    useEffect(() => {
        listedProducts();
    }, []);


    return (
        <div>
            <h1>Seller Products Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render the products data here */}
                </tbody>
            </table>

            {addProductModal ? <AddProduct setAddProductModal={setAddProductModal} addProductHandler={addProductHandler} /> :
                <button onClick={() => setAddProductModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Product
                </button>}
        </div>
    );
};

export default SellerProductsDashboard;
