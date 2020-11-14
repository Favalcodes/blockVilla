// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
// pragma experimental ABIEncoderV2;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract registerUsers {

    address owner;

    constructor () public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are the owner, not an admin");
        _;
    }


    struct Profile {
        string name;
        string work_address;
        string extra_detail;
        bytes32 password;
        uint256 photo;
        address wallet;
        bool status;
    }

    Profile[] private users;
    mapping (uint => address) profileToUser;
    mapping (address => uint) userToProfile;

    event newUser(uint id, string name, string work_address, string extra_detail);

    function addUser(string memory _name, string memory _work_address, string memory _extra_detail,string memory _passsword,uint256 _photo)  external {

        bytes32 safepassword = keccak256(abi.encodePacked(_passsword));
        users.push(Profile(_name,_work_address, _extra_detail,safepassword, _photo,msg.sender,false ));
        uint id = users.length - 1;
        profileToUser[id] = msg.sender;
        userToProfile[msg.sender] = id;
        emit newUser(id,_name,_work_address,_extra_detail);
    }
    
    function _approveUser(uint _userId) external onlyOwner {
        users[_userId].status = true;
    }

    function _viewUserProfile(uint _userId) public view  {
        require(msg.sender == users[_userId].wallet);
        users[_userId].name;
        users[_userId].work_address;
        users[_userId].extra_detail;
        users[_userId].photo;
    }

    function _userLogin(string memory _password) external view returns(bool, string memory ) {
        
        require(users[userToProfile[msg.sender]].password == keccak256(abi.encodePacked(_password)), "Wrong password");
        return (true, "User logged in successful");
    
    }
}