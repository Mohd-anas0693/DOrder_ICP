module {
    public type ProductId = Text;
    public type UserId = Text;
    public type Name = Text;
    public type Discription = Text;
    public type Price = Text;
    public type StockLevel = Nat;
    public type SellerId = Text;
    public type Product = {
        name : Name;
        description : Discription;
        price : Price;
        categeoryId : [CategoryId];
        stockLevel : StockLevel;
        sellerInfo : SellerId;
        images : Text;
        rating : Nat;
    };
    
    type Email = Text;
    type Address = Text;
    public type User = {
        userId : UserId;
        name : Name;
        email : Email;
        address : Address;
        orderHistory : [OrderId];
        walletAddress : Text;
    };
    public type OrderId = Text;
    public type Order = {
        orderId : OrderId;
        userId : UserId;
        productList : [ProductId];
        totalAmount : Text;
        orderStatus : Text;
        paymentInfo : Text;
        shippingDetails : Text;
    };
    public type CategoryId = Text;
    public type Categories = {
        categoryId : CategoryId;
        name : Name;
        description : Discription;
        parentCategory : ?[Text];
        productIds : [ProductId];
    };
};
