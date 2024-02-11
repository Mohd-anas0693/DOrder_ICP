
dfx canister call backend createUserAccount '(record {dob = "text"; name="text"; email= "text"; address = "text"})'
dfx canister call backend createProductItem '(record {categeoryId=vec {"ddd"}; name="text"; description="text"; productId="text"; stockLevel="text"; sellerId="text"; rating=2; price=3; images="text"})'
dfx canister call backend createSellerAccount '(record {country="text"; name="text"; govId="text"; address="text"; phoneNo="text"})'
dfx canister call backend getAllProductsOfSeller 