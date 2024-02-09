import Source "mo:uuid/async/SourceV4";
import UUID "mo:uuid/UUID";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import HashMap "mo:base/HashMap";
module {

    public func checkAnonymous(caller : Principal) {
        if (Principal.isAnonymous(caller) == true) {
            Debug.trap("No Access");
        };
    };
    public func getMapValue<K, V>(id : K, map : HashMap.HashMap<K, V>, errorMessage : Text) : V {
        switch (map.get(id)) {
            case (null) { Debug.trap(errorMessage) };
            case (?r) { r };
        };
    };
    public func getUuid() : async Text {
        let g = Source.Source();
        UUID.toText(await g.new());
    };
};
