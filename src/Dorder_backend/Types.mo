module {
    public type ProductId = Text;
    public type UserId = Text;
    public type SellerId = Text;
    public type Product = {
        productId : Text;
        name : Text;
        description : Text;
        price : Nat;
        categeoryId : [Text];
        stockLevel : Text;
        sellerId : SellerId;
        images : Text;
        rating : Nat;
    };

    public type ProductRequest = {
        name : Text;
        description : Text;
        price : Nat;
        stockLevel : Text;
        images : Text;
    };

    type Email = Text;
    type Address = Text;
    public type UserRequest = {
        name : Text;
        email : Text;
        dob : Text;
        address : Address;
    };
    public type OrderStatus = {
        #canceled;
        #onway;
        #delivered;
    };
    public type UserData = {
        userId : UserId;
        name : Text;
        email : Text;
        dob : Text;
        address : Address;
        orderHistory : [OrderId];
        walletAddress : Text;
    };
    public type OrderId = Text;
    public type Order = {
        orderId : OrderId;
        userId : UserId;
        sellerId : [SellerId];
        productList : [ProductId];
        totalAmount : Nat;
        orderStatus : OrderStatus;
        paymentInfo : Text;
        shippingDetails : Text;
    };
    public type CategoryId = Text;
    public type Categories = {
        categoryId : CategoryId;
        name : Text;
        description : Text;
        parentCategory : ?[Text];
        productIds : [ProductId];
    };
    public type SellerRequest = {
        name : Text;
        govId : Text;
        address : Text;
        country : Text;
        phoneNo : Text;
    };

    public type SellerInfo = {
        sellerId : SellerId;
        name : Text;
        govId : Text;
        address : Text;
        country : Text;
        phoneNo : Text;
        productsListed : [ProductId];
        revenue : Text;
    };
};
