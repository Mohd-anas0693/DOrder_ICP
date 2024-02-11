
dfx canister call backend createUserAccount '(record {dob = "text"; name="text"; email= "text"; address = "text"})'
dfx canister call backend createSellerAccount '(record {country="text"; name="text"; govId="text"; address="text"; phoneNo="text"})'
dfx canister call backend createProductItem '(record {name = "Text";shortDes ="Text";description = "ext";price = "2";stockLevel = "2";images = "Text";categeory = "Text";})'
dfx canister call backend getAllProductsOfSeller 