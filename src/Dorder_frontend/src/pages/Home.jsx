import React, { Fragment, useEffect } from "react";
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

  const newArrivalData = [
    {
      id: "01",
      productName: "Stone and Beam Westview ",
      imgUrl: "https://m.media-amazon.com/images/I/71zrJZ7e3GL._AC_UL320_.jpg",
      category: "sofa",
      price: 193,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.7,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.5,
    },
  ];
  useWindowScrollToTop();

  const fetchNewArrivals = async () => {
    try {
      const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
      await backendActor.d().then((res) => {
        console.log("res-in-success-ALL-GETPRODUCTS", res)
      }).catch((err) => {
        console.log("res-in-success-ALL-GETPRODUCTS", err)
      });
      return true;
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Message");
      console.log("error-in-ALL-GETPRODUCTS", error)
      console.log("errMessage-in-ALL-GETPRODUCTS", errMessage)
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
