import ledger "canister:icp_ledger_canister";
shared ({ caller = owner }) actor class () = this {
public shared({caller}) func getAccountBalance():async () {
    let Account = {owner};
    // await ledger.icrc1_balance_of();
    ()
} 

};
