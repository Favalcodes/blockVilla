// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
// pragma experimental ABIEncoderV2;

// import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract RegisterUsers {

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
        address wallet;
    }

    Profile[] private users;
    mapping (uint => address) profileToUser;
    mapping (address => uint) userToProfile;
    mapping (address => bool) alreadyRegistered;

    event newUser(uint id, string name, string work_address, string extra_detail);
    event userDetail(string name, string work_address, string extra_detail);
    modifier checkRegistered(address _check) {
        require(alreadyRegistered[_check] == false, "You already have an account");
        _;
    }

    function addUser(string calldata _name, string calldata _work_address, string calldata _extra_detail,string calldata _passsword)  external checkRegistered(msg.sender) {
        
        bytes32 safepassword = keccak256(abi.encodePacked(_passsword));
        users.push(Profile(_name,_work_address, _extra_detail,safepassword,msg.sender));
        uint id = uint32(users.length - 1);
        profileToUser[id] = msg.sender;
        userToProfile[msg.sender] = id;
        alreadyRegistered[msg.sender] = true;
        emit newUser(id,_name,_work_address,_extra_detail);
    }
    
    // function approveUser(uint _userId) external onlyOwner {
    //     users[_userId].status = true;
    // }

    function viewUserProfile(uint _userId) public view returns(string memory, string memory,string memory)  {
        // require(msg.sender == users[_userId].wallet);
        string memory _name = users[_userId].name;
        string  memory _workaddress = users[_userId].work_address;
        string memory _extras = users[_userId].extra_detail;
        // users[_userId].photo;
        return(_name,_workaddress,_extras);
    }

    function userLogin(string calldata _password) external view returns(bool, string memory) {
        
        require(users[userToProfile[msg.sender]].password == keccak256(abi.encodePacked(_password)), "Wrong password"); 
        return (true, "User logged in succefully");
    
    }
}