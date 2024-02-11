import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Nat "mo:base/Nat";
// import Payment "smartContract";

import Utils "utils";
import Types "Types";
actor {

  type Result = Result.Result<(Text), (Error.ErrorCode, Text)>;

  let sellerMap = HashMap.HashMap<Types.SellerId, Types.SellerInfo>(0, Text.equal, Text.hash);
  let userMap = HashMap.HashMap<Types.UserId, Types.UserData>(0, Text.equal, Text.hash);
  let productMap = HashMap.HashMap<Types.ProductId, Types.Product>(0, Text.equal, Text.hash);
  let orderMap = HashMap.HashMap<Types.OrderId, Types.Order>(0, Text.equal, Text.hash);

  public shared ({ caller }) func createUserAccount(userInfo : Types.UserRequest) : async Result {
    let userIdentity = Principal.toText(caller);
    let userData : Types.UserData = {
      userId = userIdentity;
      name = userInfo.name;
      email = userInfo.email;
      dob = userInfo.dob;
      address = userInfo.address;
      orderHistory = [];
      walletAddress = "";
    };
    try {
      Utils.checkAnonymous(caller);
      userMap.put(userIdentity, userData);
      #ok("sucessfully created Account of the User of Id:" # userIdentity);
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  public shared ({ caller }) func createSellerAccount(sellerData : Types.SellerRequest) : async Result {
    let userIdentity = Principal.toText(caller);
    let seller : Types.SellerInfo = {
      sellerId = userIdentity;
      name = sellerData.name;
      govId = sellerData.govId;
      address = sellerData.address;
      country = sellerData.country;
      phoneNo = sellerData.phoneNo;
      productsListed = [];
      revenue = "";
    };
    try {
      Utils.checkAnonymous(caller);

      switch (sellerMap.get(Principal.toText(caller))) {
        case (?r) { Debug.trap("You already have an account") };
        case (null) {};
      };

      sellerMap.put(userIdentity, seller);
      #ok("Sucessfully created the Account of Seller of Id:" # userIdentity);
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  func putProductIdInSellerInfo(sellerId : Types.SellerId, productId : Types.ProductId) {
    let sellerInfo : Types.SellerInfo = Utils.getMapValue<Types.SellerId, Types.SellerInfo>(sellerId, sellerMap, "No Data Exist ");
    let productIdList : List.List<Types.ProductId> = List.fromArray(sellerInfo.productsListed);
    let productIdArray : [Types.ProductId] = List.toArray(List.push(productId, productIdList));
    let updatedSellerInfo : Types.SellerInfo = {
      sellerId = sellerInfo.sellerId;
      name = sellerInfo.name;
      govId = sellerInfo.govId;
      address = sellerInfo.address;
      country = sellerInfo.country;
      phoneNo = sellerInfo.phoneNo;
      productsListed = productIdArray;
      revenue = sellerInfo.revenue;
    };
    sellerMap.put(sellerId, updatedSellerInfo);
  };

  public shared ({ caller }) func createProductItem(product : Types.Product) : async Result {
    let sellerIdentity = Principal.toText(caller);
    try {
      Utils.checkAnonymous(caller);
      ignore Utils.getMapValue<Types.SellerId, Types.SellerInfo>(sellerIdentity, sellerMap, "No Access");
      let uuid = await Utils.getUuid();
      let productId : Types.ProductId = Principal.toText(caller) # "_" #uuid;
      putProductIdInSellerInfo(sellerIdentity, productId);
      let productData : Types.Product = {
        productId;
        name = product.name;
        description = product.description;
        price = product.price;
        categeoryId = product.categeoryId;
        stockLevel = product.stockLevel;
        sellerId = sellerIdentity;
        images = product.images;
        rating = 0;
      };
      productMap.put(productId, productData);
      #ok("Sucessfully Product of ProductId:" # productId # "and seller:" # sellerIdentity);
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  func fetchSellerIdFromProductId(productIds : [Types.ProductId]) : [Types.SellerId] {
    var sellerIdList = List.nil<Text>();
    for (product in productIds.vals()) {
      let sellerId : [Text] = Iter.toArray(Text.split(product, #char '_'));
      sellerIdList := List.push(sellerId[0], sellerIdList);
    };
    List.toArray(sellerIdList);
  };

  func getTotalAmount(productIds : [Types.ProductId]) : Nat {
    var total = 0;
    for (productId in productIds.vals()) {
      let productInfo : Types.Product = Utils.getMapValue<Types.ProductId, Types.Product>(productId, productMap, "No product found!");
      total += productInfo.price;
    };
    total;
  };

  func updateOrderHistory(userIdentity : Principal, orderId : Types.OrderId) {
    let userId : Types.UserId = Principal.toText(userIdentity);
    let userInfo : Types.UserData = Utils.getMapValue<Types.UserId, Types.UserData>(userId, userMap, "you are not User");

    var orderHistoryList = List.fromArray(userInfo.orderHistory);
    orderHistoryList := List.push(orderId, orderHistoryList);

    let updatedUserInfo : Types.UserData = {
      userId = Principal.toText(userIdentity);
      name = userInfo.name;
      email = userInfo.email;
      dob = userInfo.dob;
      address = userInfo.address;
      orderHistory = List.toArray(orderHistoryList);
      walletAddress = "";

    };
    userMap.put(Principal.toText(userIdentity), updatedUserInfo);
  };

  public shared ({ caller }) func createOrder(productIds : [Types.ProductId]) : async Result {
    let orderId = await Utils.getUuid();
    try {
      Utils.checkAnonymous(caller);
      let sellerIdArray = fetchSellerIdFromProductId(productIds);
      var totalAmount = getTotalAmount(productIds);
      updateOrderHistory(caller, orderId);
      let orderInfo : Types.Order = {
        orderId = orderId;
        userId = Principal.toText(caller);
        sellerId = sellerIdArray;
        productList = productIds;
        totalAmount = totalAmount;
        orderStatus = #onway;
        paymentInfo = "";
        shippingDetails = "";
      };
      orderMap.put(orderId, orderInfo);
      #ok("Sucessfully Booked Order");

    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  public shared query ({ caller }) func getUserInfo() : async Types.UserData {
    let userId : Types.UserId = Principal.toText(caller);
    Utils.getMapValue<Types.UserId, Types.UserData>(userId, userMap, "You are not user");
  };

  public shared query ({ caller }) func getSellerInfo() : async Types.SellerInfo {
    let sellerId : Types.SellerId = Principal.toText(caller);
    Utils.getMapValue<Types.SellerId, Types.SellerInfo>(sellerId, sellerMap, "you are not seller");
  };
  public shared query ({ caller }) func getProductInfo(productId : Types.ProductId) : async Types.Product {
    let userIdentity = Principal.toText(caller);
    Utils.getMapValue<Types.ProductId, Types.Product>(productId, productMap, "Invalid Product Id");
  };

  public shared query ({ caller }) func getAllProductsOfSeller() : async [Types.Product] {
    let sellerId : Types.SellerId = Principal.toText(caller);
    let sellerData : Types.SellerInfo = Utils.getMapValue<Types.SellerId, Types.SellerInfo>(sellerId, sellerMap, "You are not seller");
    var productList = List.nil<Types.Product>();
    for (productId in sellerData.productsListed.vals()) {
      Debug.print(productId);
      let productInfo = Utils.getMapValue<Types.ProductId, Types.Product>(productId, productMap, "Invalid Product Id");
      productList := List.push(productInfo, productList);
    };
    List.toArray(productList);
  };
  public shared query ({ caller }) func getAllOrderOfUser() : async [Types.Order] {
    let userId : Types.UserId = Principal.toText(caller);
    let userData : Types.UserData = Utils.getMapValue<Types.UserId, Types.UserData>(userId, userMap, "You don't have account");
    var orderDataList = List.nil<Types.Order>();
    for (orderId in userData.orderHistory.vals()) {
      let orderData : Types.Order = Utils.getMapValue<Types.OrderId, Types.Order>(orderId, orderMap, "No order of this id found");
      orderDataList := List.push(orderData, orderDataList);
    };
    List.toArray(orderDataList);
  };
  public func getOrderDataByOrderId(orderId : Types.OrderId) : async Types.Order {
    Utils.getMapValue<Types.OrderId, Types.Order>(orderId, orderMap, "No Order of This id found");
  };
};
