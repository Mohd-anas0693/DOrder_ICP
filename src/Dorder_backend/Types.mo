module {
    public type ProductId = Text;
    public type UserId = Text;
    public type SellerId = Text;
    public type Product = {
        productId : Text;
        name : Text;
        description : Text;
        price : Text;
        categeoryId : [Text];
        stockLevel : Text;
        sellerInfo : SellerId;
        images : Text;
        rating : Nat;
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
        #delivered;
    };
    public type UserData = {
        userId : UserId;
        name : Text;
        email : Text;
        dob : Text;
        address : Address;
        orderHistory : [{ orderId : OrderId; status : OrderStatus }];
        walletAddress : Text;
    };
    public type OrderId = Text;
    public type Order = {
        orderId : OrderId;
        userId : UserId;    
        sellerId : [SellerId];
        productList : [ProductId];
        totalAmount : Text;
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
