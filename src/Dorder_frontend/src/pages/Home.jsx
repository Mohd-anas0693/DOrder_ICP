import React, { Fragment, useEffect } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { AuthClient } from "@dfinity/auth-client";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import {useNavigate} from "react-router-dom";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../utils/useAuthClientHelper";
const Home = () => {
  const navigate=useNavigate();
  const { login } = useAuth();

  const handleSaveData = async (authClient) => {
    {
      const identity = await authClient.getIdentity();
      const agent = newHttpAgent({ identity });
      backendActor = createActor(process.env.CANISTER_ID_BACKEND, {
        agent,
      });
      window.identity = identity;
      const principal = identity.getPrincipal();
      window.principal = principal;
      window.backend = backendActor;
    }
  };
  const handleLogin = async () => {
    let authClient = await login();
    handleSaveData(authClient);
    navigate("/");
  };
  const handleRefresh = async () => {
    const authClient = await AuthClient.create({
      idleOptions: {
        idleTimeout: 1000 * 60 * 30, // set to 30 minutes
        disableDefaultIdleCallback: true, // disable the default reload behavior
      },
    });
    if (
      authClient.isAuthenticated() &&
      (await authClient.getIdentity().getPrincipal().isAnonymous()) === false
    ) {
      handleSaveData(authClient);
    } else {
      toast.error("You are not logged in");
    }
  };

  useEffect(() => {
    if (!window.identity) {
      handleRefresh();
    }
    handleLogin();
  }, []);

  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
