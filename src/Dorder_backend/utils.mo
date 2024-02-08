import Source "mo:uuid/async/SourceV4";
import UUID "mo:uuid/UUID";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
module {

    public func checkAnonymous(caller : Principal) {
        if (Principal.isAnonymous(caller) == true) {
            Debug.trap("No Access");
        };
    };
    public func getUuid() : async Text {
        let g = Source.Source();
        UUID.toText(await g.new());
    };
};
