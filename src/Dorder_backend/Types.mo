module {
    public type ProductId = Text;
    public type UserId = Text;
    public type SellerId = Text;
    public type Rating = {
        rating : Text;
        text : Text;
    };
    public type Product = {
        id : Text;
        sellerId : SellerId;
        productName : Text;
        imgUrl : Text;
        categeory : Text;
        price : Nat;
        stockLevel : Nat;
        discount : Nat;
        shortDesc : Text;
        description : Text;
        reviews : [Rating];
        avgRating : Text;
    };

    public type ProductRequest = {
        name : Text;
        shortDes : Text;
        description : Text;
        price : Text;
        stockLevel : Text;
        images : Text;
        categeory : Text;
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
