import React, { Fragment, useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { AuthClient } from "@dfinity/auth-client";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import { useNavigate } from "react-router-dom";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../utils/useAuthClientHelper";
import { getValueByKeyFromString } from "../utils/getMessage";
import { createActor } from "../../../declarations/backend"
const Home = () => {
  const navigate = useNavigate();
  const { backendCanisterId, identity } = useAuth();


  // const newArrivalData = products.filter(
  //   (item) => item.category === "mobile" || item.category === "wireless"
  // );
  // const bestSales = products.filter((item) => item.category === "sofa");

  const [newArrivalData, setNewArrivalData] = useState([]);

  useWindowScrollToTop();

  function convertDiscountToInteger(products) {
    return products.map(product => {
      // Check if the discount field exists and is a BigInt type
      if (product.discount !== undefined && typeof product.discount === 'bigint') {
        // Convert the discount field to an integer
        product.discount = Number(product.discount);
      }
      if (product.stockLevel !== undefined && typeof product.stockLevel === 'bigint') {
        // Convert the discount field to an integer
        product.stockLevel = Number(product.stockLevel);
      }
      if (product.price !== undefined && typeof product.price === 'bigint') {
        // Convert the discount field to an integer
        product.price = Number(product.price);
      }
      return product;
    });
  }

  const fetchNewArrivals = async () => {
    try {
      const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
      await backendActor.getAllProducts().then((res) => {
        console.log("res-in-success-ALL-GETPRODUCTS", res)
        let sortedArray = convertDiscountToInteger(res);
        setNewArrivalData(sortedArray);
      }).catch((err) => {
        setNewArrivalData([]);
        console.log("res-in-success-ALL-GETPRODUCTS", err)
      });
      return true;
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Message");
      console.log("error-in-ALL-GETPRODUCTS", error)
      console.log("errMessage-in-ALL-GETPRODUCTS", errMessage)
      setNewArrivalData([]);
      return false;
    }
  };

  useEffect(() => {
    if (backendCanisterId, identity) {
      fetchNewArrivals();
    }
  }, [backendCanisterId, identity]);

  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      {/* <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      /> */}
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      {/* <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} /> */}
    </Fragment>
  );
};

export default Home;
