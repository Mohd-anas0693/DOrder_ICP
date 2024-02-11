import React, { useEffect, useState } from "react";
import { getValueByKeyFromString } from "../../utils/getMessage";
import { createActor } from "../../../../declarations/backend/index";
import AddProduct from "../Forms/AddProduct";

const SellerProductsDashboard = ({ identity, backendCanisterId }) => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [products, setProducts] = useState([]);

  const addProductHandler = async (val) => {
    try {
      const backendActor = createActor(backendCanisterId, {
        agentOptions: { identity: identity },
      });
      await backendActor
        .createProductItem({
          productName: val?.name || "No name",
          price: val?.price.toString() || "0",
          stockLevel: val?.stock.toString() || "0",
          imgUrl: val?.image || "No image",
          category: val?.category || "No category",
          shortDesc: val?.shortDesc || "No Short Description",
          description: val?.description || "No description",
        })
        .then((res) => {
          console.log("res-in-success", res);
          setAddProductModal();
          listedProducts();
        })
        .catch((err) => {
          console.log("err", err);
        });
      return true;
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Reject text");
      console.log("error-in-create-product", error);
      console.log("errMessage-in-create-product", errMessage);
      return false;
    }
  };

  const listedProducts = async () => {
    try {
      const backendActor = createActor(backendCanisterId, {
        agentOptions: { identity: identity },
      });
      await backendActor
        .getAllProductsOfSeller()
        .then((res) => {
          // navigate('/');
          console.log("res-in-success-GETPRODUCTS", res);
          setProducts(res.ok ? res.ok : []);
        })
        .catch((err) => {
          console.log("res-in-success-GETPRODUCTS", err);
        });
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Message");
      console.log("error-in-GETPRODUCTS", error);
      console.log("errMessage-in-GETPRODUCTS", errMessage);
      return false;
    }
  };

  useEffect(() => {
    listedProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800  my-8 mx-4 text-center lg:text-left  py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-800 text-transparent bg-clip-text ">
        Seller Products Dashboard
      </h1>
      {addProductModal ? (
        <AddProduct
          setAddProductModal={setAddProductModal}
          addProductHandler={addProductHandler}
        />
      ) : (
        <div className="flex w-full justify-end">
          {" "}
          <button
            onClick={() => setAddProductModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={product.imgUrl}
                alt={product.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg tracking-tight text-gray-900">
                  {product.productName}
                </h3>
                <p className="text-indigo-600 font-semibold">{product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-sm text-gray-700 mt-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-600">
                    Stock: {product.stockLevel}
                  </span>
                  <span className="flex items-center text-sm text-yellow-500">
                    {Array.from(
                      { length: Math.round(product.avgRating) },
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.5 3 1-5.5L1 8l5.6-.5L10 3l3.4 4.5L19 8l-4.5 4.5 1 5.5z" />
                        </svg>
                      )
                    )}
                    <span className="ml-2">({product.reviews} reviews)</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerProductsDashboard;
