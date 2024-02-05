module {
    public type ProductId = Text;
    public type UserId = Text;
    public type SellerId = Text;
    public type Product = {
        productId:Text;
        name : Text;
        description : Text;
        price : Text;
        categeoryId : [Text];
        stockLevel : Text;
        sellerInfo : Text;
        images : Text;
        rating : Nat;
    };

    type Email = Text;
    type Address = Text;
    public type User = {
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
        sellerId : SellerId;
        productList : [ProductId];
        totalAmount : Text;
        orderStatus : Text;
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

    public type Seller = {
        sellerId : SellerId;
        name : Text;
        govId : Text;
        address : Text;
        productsListed : [ProductId];
        revenue : Text;
    };
};
