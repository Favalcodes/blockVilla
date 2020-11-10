pragma solidity ^0.6.0;

import './ownable.sol';

contract registerUsers {

    struct Profile {
        string name;
        string work_address;
        string extra_detail;
        uint256 photo;
        address wallet;
    }

    Profile[] private users;

    event newUser();

    function addUser(string _name, string _work_address string _extra_deatil,uint256 _photo address _wallet ) {

        
    }
    
}