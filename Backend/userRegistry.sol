pragma solidity ^0.6.0;

import './ownable.sol';

contract registerUsers {

    address owner;

    constructor () public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }


    struct Profile {
        string name;
        string work_address;
        string extra_detail;
        uint256 photo;
        address wallet;
        bool status
    }

    Profile[] private users;
    mapping (uint => address) profileToUser;

    event newUser(uint id, string name, string work_address, string extra_detail);

    function addUser(string memory _name, string memory _work_address string memory _extra_detail,uint256 _photo address _wallet )  external {
        require _wallet == msg.sender;
        uint id = users.push(Profile(_name,_work_address, _extra_detail, _photo,_wallet,false ));
        profileToUser[id] = msg.sender;
        emit newUser(id,_name,_work_address,_extra_detail)
    }
    
    function _approveUser(uint _userId) external onlyOwner {
        users[_userId].status = true;
    }
}