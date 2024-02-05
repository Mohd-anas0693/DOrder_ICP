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

  let sellerMap = HashMap.HashMap<Types.SellerId, Types.Seller>(0, Text.equal, Text.hash);
  let userMap = HashMap.HashMap<Types.UserId, Types.User>(0, Text.equal, Text.hash);
  let productMap = HashMap.HashMap<Types.ProductId, Types.Product>(0, Text.equal, Text.hash);

  let sellerProductsMap = HashMap.HashMap<Types.SellerId, [Types.ProductId]>(0, Text.equal, Text.hash);

  func userIdExist(caller : Types.UserId, errorMessage : Text) {
    switch (Array.find<Text>(Iter.toArray(userMap.keys()), func(x) : Bool { x == caller })) {
      case (null) { Debug.trap(errorMessage) };
      case (?r) {};
    };
  };
  public shared ({ caller }) func createUserAccount(userData : Types.User) : async Result {
    try {
      Utils.checkAnonymous(caller);
      userMap.put(Principal.toText(caller), userData);
      #ok("sucessfully created Account of the User of Id:" # Principal.toText(caller));
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  public shared ({ caller }) func createSellerAccount(sellerData : Types.Seller) : async Result {
    try {
      Utils.checkAnonymous(caller);
      sellerIdExist(caller, "Your seller Account Already exist");
      sellerMap.put(Principal.toText(caller), sellerData);
      #ok("Sucessfully created the Account of Seller with Id:" # Principal.toText(caller));
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  func sellerIdExist(caller : Principal, errorMessage : Text) {
    switch (Array.find<Text>(Iter.toArray(sellerMap.keys()), func(x) : Bool { x == Principal.toText(caller) })) {
      case (null) { Debug.trap(errorMessage) };
      case (?r) {};
    };
  };

  func linkSellerProduct(sellerId : Types.SellerId, productId : Types.ProductId) {
    switch (sellerProductsMap.get(sellerId)) {
      case (null) { sellerProductsMap.put(sellerId, [productId]) };
      case (?value) {
        let productIdList = List.push(productId, List.fromArray(value));
        sellerProductsMap.put(sellerId, List.toArray(productIdList));
      };
    };
  };

  public shared ({ caller }) func createProductItem(product : Types.Product) : async Result {
    let sellerIdentity = Principal.toText(caller);
    try {
      Utils.checkAnonymous(caller);
      sellerIdExist(caller, "No access to create the Product");
      let uuid = await Utils.getUuid();
      let productId : Types.ProductId = Principal.toText(caller) # "#" #uuid;

      let productData : Types.Product = {
        productId;
        name = product.name;
        description = product.description;
        price = product.price;
        categeoryId = product.categeoryId;
        stockLevel = product.stockLevel;
        sellerInfo = product.sellerInfo;
        images = product.images;
        rating = product.rating;
      };

      linkSellerProduct(sellerIdentity, productId);
      productMap.put(sellerIdentity, productData);
      #ok("Sucessfully Product  with Id:" # sellerIdentity);
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      #err(code, message);
    };
  };

  public shared query ({ caller }) func getSellerProductIds() : async [Types.ProductId] {
    let userIdentity = Principal.toText(caller);
    switch (sellerProductsMap.get(userIdentity)) {
      case (null) { throw Error.reject("You haven't listed products") };
      case (?value) { value };
    };
  };

  // public shared ({ caller }) func bookOrder(productId: Types.ProductId) : async Text {
    // let userIdentity = Principal.toText(caller);
    // userIdExist(userIdentity, "no acess create You account first");
    
  // };
};
