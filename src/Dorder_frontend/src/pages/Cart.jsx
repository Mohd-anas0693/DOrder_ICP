import {
  idlFactory,
  createActor as ledgerActor,
} from "../../../Dorder_backend/ledger.did";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import { useAuth } from "../utils/useAuthClientHelper";
import { getValueByKeyFromString } from "../utils/getMessage";
import { createActor } from "../../../declarations/backend/index";
import { toast } from "react-toastify";
import UserSignUp from "../components/Forms/UserSignUp";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // middlware to localStorage
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const [userBalance, setUserBalance] = useState(0);
  const [tokenActor, setTokenActor] = useState(null);
  const [metaData, setMetaData] = useState();
  const [isUserExist, setIsUserExist] = useState(null);
  const { backendCanisterId, identity } = useAuth();
  const [signUpUserModal, setSignUpUserModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    // if(CartItem.length ===0) {
    //   const storedCart = localStorage.getItem("cartItem");
    //   setCartItem(JSON.parse(storedCart));
    // }
  }, []);
  const icpLedger = "ryjl3-tyaaa-aaaaa-aaaba-cai";
  const isAlreadyUserExist = async () => {
    let backendActor = createActor(backendCanisterId, {
      agentOptions: { identity: identity },
    });
    try {
      const res = await backendActor.getUserInfo();
      console.log("res", res);
      if (res) {
        if (res === "You are not user") {
          return false;
        }
        return true;
      } else {
        return false;
      }
    } catch (error) {
      let errMessage = await getValueByKeyFromString(
        error.toString(),
        "Reject text"
      );
      console.log("errMessage", errMessage);
      toast.error(errMessage);
      return false;
    }
  };

  const onBoardUserHandler = async (val) => {
    try {
      const backendActor = createActor(backendCanisterId, {
        agentOptions: { identity: identity },
      });
      await backendActor
        .createUserAccount({
          name: val?.name || "No name",
          email: val?.email || "No email",
          dob: val?.dob || "No Dob",
          address: val?.address || "No address",
        })
        .then((res) => {
          setIsUserExist(true);
          setSignUpUserModal(false);
          return true;
        })
        .catch((err) => {
          console.log("err", err);
          return false;
        });
      return true;
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Reject text");
      console.log("error-in-create-user", error);
      console.log("errMessage-in-create-user", errMessage);
      return false;
    }
  };

  const placeOrderHandler = async () => {
    try {
      const backendActor = createActor(backendCanisterId, {
        agentOptions: { identity: identity },
      });
      await backendActor
        .createOrder("1234")
        .then((res) => {
          toast.success("Order Placed");
          return true;
        })
        .catch((err) => {
          console.log("err", err);
          return false;
        });
      return true;
    } catch (error) {
      let errMessage = getValueByKeyFromString(error.toString(), "Reject text");
      console.log("error-in-place-order", error);
      console.log("errMessage-in-place-order", errMessage);
      return false;
    }
  };

  const createTokenActor = (canisterId) => {
    let identity = identity;

    let tokenActor = Actor.createActor(idlFactory, {
      agentOptions: { identity: identity },
      canisterId,
    });
    return tokenActor;
  };
  const getUserBalance = async () => {
    await createTokenActor(icpLedger).then(async (res) => {
      setTokenActor(res);
      setUserBalance(
        await res.icrc1_balance_of({ owner: identity, subaccount: [] })
      );
      console.log(userBalance);
      await res
        .icrc1_metadata()
        .then((r) => {
          console.log(r);
          setMetaData(formatTokenMetaData(r));
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const formatTokenMetaData = (arr) => {
    const resultObject = {};
    arr.forEach((item) => {
      const key = item[0];
      const value = item[1][Object.keys(item[1])[0]]; // Extracting the value from the nested object
      resultObject[key] = value;
    });
    return resultObject;
  };

  const transfer = async (sendAmount, sendPrincipal) => {
    console.log("metaData[decimals]", metaData);
    let amnt = parseInt(
      Number(sendAmount) * Math.pow(10, parseInt(metaData?.["icrc1:decimals"]))
    );

    console.log("amount", amnt);
    if (Balance >= amnt) {
      let transaction = {
        amount: amnt,
        from_subaccount: [],
        to: {
          owner: Principal.fromText(sendPrincipal),
          subaccount: [],
        },
        fee: [metaData?.["icrc1:fee"]],
        memo: [],
        created_at_time: [],
      };
      console.log("metadata inside transfer fee", metaData?.["icrc1:fee"]);
      let response = await tokenActor.icrc1_transfer(transaction);
      console.log(response);
      alert("transaction successful!");
    } else {
      alert("Insufficient balance");
    }
  };

  useEffect(() => {
    console.log("cartList", cartList);
    if (backendCanisterId && identity) {
      (async () => {
        const response = await isAlreadyUserExist();
        console.log(response);
      })();
    }
    setTokenActor(createTokenActor(icpLedger));
    getUserBalance();
  }, [backendCanisterId, identity]);

  console.log(isUserExist);
  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {signUpUserModal ? (
              <div className="w-full flex justify-center">
                <UserSignUp
                  setSignUpUserModal={setSignUpUserModal}
                  onBoardUserHandler={onBoardUserHandler}
                />
              </div>
            ) : cartList.length === 0 ? (
              <h1 className="no-items product">No Items are add in Cart</h1>
            ) : (
              cartList.map((item) => {
                const productQty = item.price * item.qty;
                return (
                  <div className="cart-list" key={item.id}>
                    <Row>
                      <Col className="image-holder" sm={4} md={3}>
                        <img src={item.imgUrl} alt="" />
                      </Col>
                      <Col sm={8} md={9}>
                        <Row className="cart-content justify-content-center">
                          <Col xs={12} sm={9} className="cart-details">
                            <h3>{item.productName}</h3>
                            <h4>
                              {item.price}.00 (ICP) * {item.qty}
                              <span>{productQty}.00 (ICP)</span>
                            </h4>
                          </Col>
                          <Col xs={12} sm={3} className="cartControl">
                            <button
                              className="incCart"
                              onClick={() =>
                                dispatch(addToCart({ product: item, num: 1 }))
                              }
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                            <button
                              className="desCart"
                              onClick={() => dispatch(decreaseQty(item))}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          </Col>
                        </Row>
                      </Col>
                      <button
                        className="delete"
                        onClick={() => dispatch(deleteProduct(item))}
                      >
                        <ion-icon name="close"></ion-icon>
                      </button>
                    </Row>
                  </div>
                );
              })
            )}
          </Col>

          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>{totalPrice}.00 (ICP)</h3>
              </div>
            </div>

            {isUserExist ? (
              cartList && cartList.length > 0 ? (
                <button
                  onClick={() => placeOrderHandler()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Place Order
                </button>
              ) : (
                <button
                  onClick={() => navigate("/home")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Items to Cart
                </button>
              )
            ) : (
              <button
                disabled={signUpUserModal}
                onClick={() => setSignUpUserModal(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up to Place Order
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
