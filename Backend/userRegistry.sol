pragma solidity ^0.6.0;

contract registerUsers {

    struct Profile {
        string name;
        string work_address;
        string extra_detail;
        uint256 photo;
        address wallet;
    }

    Profile[] private users;

    function addUser(string _name, string _work_address string _extra_deatil,uint256 _photo address _wallet ) {
        
        
    }
    
}