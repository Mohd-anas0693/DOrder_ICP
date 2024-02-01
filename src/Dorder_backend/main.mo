import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Types "Types";
actor {
  type Result = Result.Result<(Text), (Error.ErrorCode, Text)>;

  let mapOfUser = HashMap.HashMap<Types.UserId, Types.User>(0, Text.equal, Text.hash);
  let mapOfProduct = HashMap.HashMap<Types.ProductId, Types.Product>(0, Text.equal, Text.hash);
  let mapOfOrders = HashMap.HashMap<Types.OrderId, Types.Order>(0, Text.equal, Text.hash);
  let mapOfCategory = HashMap.HashMap<Types.CategoryId, Types.Categories>(0, Text.equal, Text.hash);

  public shared ({ caller }) func putUserData(userData : Types.User) : async Result {
    assert (Principal.isAnonymous(caller) == false);
    try {
      mapOfUser.put(Principal.toText(caller), userData);
      #ok("Sucessfully inserted Data");
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      Debug.trap(message);
      #err(code, message);
    };
  };
  public shared ({ caller }) func putProductData(productId : Types.ProductId, productData : Types.Product) : async Result {
    assert (Principal.isAnonymous(caller) == false);
    try {
      mapOfProduct.put(productId, productData);
      #ok("Sucessfully inserted Data");
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      Debug.trap(message);
      #err(code, message);
    };
  };
  public shared ({ caller }) func putCategeory(categeoryId : Types.CategoryId, categeory : Types.Categories) : async Result {
    assert (Principal.isAnonymous(caller) == false);
    try {
      mapOfCategory.put(Principal.toText(caller), categeory);
      #ok("Sucessfully inserted Data");
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      Debug.trap(message);
      #err(code, message);
    };
  };
  public shared ({ caller }) func putOrderId(orderId : Types.OrderId, orderInfo : Types.Order) : async Result {
    assert (Principal.isAnonymous(caller) == false);
    try {
      mapOfOrders.put(orderId, orderInfo);
      #ok("Sucessfully inserted Data");
    } catch (e) {
      let code = Error.code(e);
      let message = Error.message(e);
      Debug.trap(message);
      #err(code, message);
    };
  };
  public shared query ({ caller }) func getUserData() : async Types.User {
    switch (mapOfUser.get(Principal.toText(caller))) {
      case (null) { throw Error.reject("No useData found") };
      case (?r) {
        r;
      };
    };
  };
  public query func getOrderData(orderId : Types.OrderId) : async Types.Order {
    switch (mapOfOrders.get(orderId)) {
      case (null) { throw Error.reject("No useData found") };
      case (?r) {
        r;
      };
    };
  };
  public shared query ({ caller }) func getCategeroiesData(id : Types.CategoryId) : async Types.User {
    switch (mapOfCategory.get(id)) {
      case (null) { throw Error.reject("No useData found") };
      case (?r) {
        r;
      };
    };
  };
  public shared query ({ caller }) func getProductData(productId:Types.ProductId) : async Types.Product {
    switch (mapOfProduct.get(productId)) {
      case (null) { throw Error.reject("No useData found") };
      case (?r) {
        r;
      };
    };
  };

};
