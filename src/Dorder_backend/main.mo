import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import List "mo:base/List";

import Utils "utils";
import Types "Types";
actor {

  type Result = Result.Result<(Text), (Error.ErrorCode, Text)>;

  let sellerMap = HashMap.HashMap<Types.SellerId, Types.SellerInfo>(0, Text.equal, Text.hash);
  let userMap = HashMap.HashMap<Types.UserId, Types.UserData>(0, Text.equal, Text.hash);
  let productMap = HashMap.HashMap<Types.ProductId, Types.Product>(0, Text.equal, Text.hash);
  let orderMap = HashMap.HashMap<Types.OrderId, Types.Order>(0, Text.equal, Text.hash);

  func userIdExist(caller : Types.UserId, errorMessage : Text) {
    switch (Array.find<Text>(Iter.toArray(userMap.keys()), func(x) : Bool { x == caller })) {
      case (null) { Debug.trap(errorMessage) };
      case (?r) {};
    };
  };
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

  func sellerIdExist(caller : Principal) : Bool {
    switch (sellerMap.get(Principal.toText(caller))) {
      case (null) { false };
      case (?r) { true };
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
      if (sellerIdExist(caller) == true) {
        Debug.trap("You already have account with this identity");
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
    let sellerInfo : Types.SellerInfo = switch (sellerMap.get(sellerId)) {
      case (null) { Debug.trap("No data Exist") };
      case (?r) { r };
    };
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
      if (sellerIdExist(caller) == false) {
        Debug.trap("No Acess you don't");
      };
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
        sellerInfo = product.sellerInfo;
        images = product.images;
        rating = 0;
      };
      productMap.put(sellerIdentity, productData);
      #ok("Sucessfully Product of ProductId:" # productId # "and seller:" # sellerIdentity);
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  func fetchSellerIdFormProductId(productIds : [Types.ProductId]) : [Types.SellerId] {
    var sellerIdList = List.nil<Text>();
    for (product in productIds.vals()) {
      let sellerId : [Text] = Iter.toArray(Text.split(product, #char '_'));
      sellerIdList := List.push(sellerId[0], sellerIdList);
    };
    List.toArray(sellerIdList);
  };

  public shared ({ caller }) func createOrder(productIds : [Types.ProductId]) : async Result {
    let orderId = await Utils.getUuid();
    try {
      Utils.checkAnonymous(caller);
      let sellerIdArray = fetchSellerIdFormProductId(productIds);
      #ok("ass");

    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };
  public shared func createUuid() : async Text {
    await Utils.getUuid();
  };
};
