module {
    type ProductId = Text;
    type Name = Text;
    type Discription = Text;
    type Price = Text;
    type StockLevel = Nat;
    type SellerId = Text;
    public type Product = {
        productId : ProductId;
        name : Name;
        description : Discription;
        price : Price;
        categeoryId : [CategoryId];
        stockLevel : StockLevel;
        sellerInfo : SellerId;
        images : Text;
        rating : Nat;
    };
    type UserId = Text;
    type Email = Text;
    type Address = Text;
    public type Users = {
        userId : UserId;
        name : Name;
        email : Email;
        address : Address;
        orderHistory : [OrderId];
        walletAddress : Text;
    };
    type OrderId = Text;
    public type Order = {
        orderId : OrderId;
        userId : UserId;
        productList : [ProductId];
        totalAmount : Text;
        orderStatus : Text;
        paymentInfo : Text;
        shippingDetails : Text;
    };
    type CategoryId = Text;
    public type Categories = {
        categoryId : CategoryId;
        name : Name;
        description : Discription;
        parentCategory : ?[Text];
        productIds : [ProductId];
    };
};
